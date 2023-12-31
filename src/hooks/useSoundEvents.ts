import { useCallback, useEffect, useRef, useState, RefObject } from "react";
import useAudioPlayer from "./useAudioPlayer";
import useDeviceMotion from "./useDeviceMotion";

export interface AudioFile {
  name: string; // 画面に表示される名前
  path: string; // 音声ファイルのパス
}

const useSoundEvents = (
  shakeThreshold: number = 20,
  shakeInterval: number = 200,
  soundRef: RefObject<HTMLDivElement>,
) => {
  const audioFiles: AudioFile[] = [
    { name: "マラカス", path: "/sounds/maracas-sound.mp3" },
    { name: "タンバリン", path: "/sounds/tambourine.mp3" },
    { name: "拍手", path: "/sounds/clap.mp3" },
    { name: "パフパフ", path: "/sounds/pafu.mp3" },
    { name: "ボイン", path: "/sounds/boyon.mp3" },
    { name: "チリン", path: "/sounds/chin.mp3" },
    { name: "鳩時計", path: "/sounds/birdClock.mp3" },
    { name: "ドラ", path: "/sounds/DaLuo.mp3" },
  ];
  const [audioFile, setAudioFile] = useState<AudioFile>(audioFiles[0]);
  const {
    loadingState,
    playSound,
    reloadAudio,
    adjustVolume,
    mute,
    unmute,
    toggleMute,
    isMuted,
    volume,
  } = useAudioPlayer(audioFile.path);
  const {
    requestDeviceMotion,
    isDevicemotionPermissionGranted,
    updateAndDetectAcceleration,
  } = useDeviceMotion(shakeThreshold);
  const lastPlayedTime = useRef<number>(0);

  const canPlaySound = useCallback(() => {
    const now = Date.now();
    if (now - lastPlayedTime.current < shakeInterval) {
      return false;
    }
    lastPlayedTime.current = now;
    return true;
  }, [lastPlayedTime, shakeInterval]);

  const playSoundIfPossible = useCallback(() => {
    if (canPlaySound()) {
      playSound();
    }
  }, [canPlaySound, playSound]);

  const handleSwipe = useCallback(() => {
    playSoundIfPossible();
  }, [playSoundIfPossible]);

  const handleTouch = useCallback(() => {
    playSoundIfPossible();
  }, [playSoundIfPossible]);

  const handleShake = useCallback(
    (e: DeviceMotionEvent) => {
      const isShaking = updateAndDetectAcceleration(e);
      if (isShaking) {
        playSoundIfPossible();
      }
    },
    [updateAndDetectAcceleration, playSoundIfPossible],
  );

  useEffect(() => {
    const div = soundRef.current;
    if (!div) return;
    const eventType = 'ontouchstart' in window ? 'touchstart' : 'click';
    div.addEventListener(eventType, handleTouch);
    return () => {
      div.removeEventListener(eventType, handleTouch);
    };
  }, [handleTouch, isMuted, soundRef]);

  useEffect(() => {
    const div = soundRef.current;
    if (!div) return;
    if (!isMuted) {
      div.addEventListener("touchmove", handleSwipe);
    }
    return () => {
      div.removeEventListener("touchmove", handleSwipe);
    };
  }, [handleSwipe, isMuted, soundRef]);

  useEffect(() => {
    if (isDevicemotionPermissionGranted) {
      window.addEventListener("devicemotion", handleShake);
    }
    return () => {
      window.removeEventListener("devicemotion", handleShake);
    };
  }, [handleShake, isDevicemotionPermissionGranted]);

  return {
    loadingState,
    playSound,
    reloadAudio,
    adjustVolume,
    mute,
    unmute,
    toggleMute,
    isMuted,
    volume,
    isDevicemotionPermissionGranted,
    requestDeviceMotion,
    audioFiles,
    audioFile,
    setAudioFile,
  };
};

export default useSoundEvents;
