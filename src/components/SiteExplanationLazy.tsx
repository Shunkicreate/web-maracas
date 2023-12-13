import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import IsLoading from "./IsLoading";
const AsyncContent = lazy(() => import("./SiteExplanation"));

const SiteExplanationLazy = () => {
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							Webマラカスの使い方
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					<Suspense fallback={<IsLoading />}>
						<AsyncContent />
					</Suspense>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default SiteExplanationLazy;

