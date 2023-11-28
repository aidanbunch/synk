import {
	Text,
	Spacer,
	Stack,
	Card,
	Image,
	CardFooter,
	AspectRatio,
	IconButton,
} from "@chakra-ui/react";
import { Heart } from "lucide-react";

function HotelCard() {
	return (
		<Card cursor="pointer">
			<AspectRatio width="100%" ratio={4 / 3}>
				<Image
					fallbackSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2e/79/34/the-grand-hotel-club.jpg?w=1200&h=-1&s=1"
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
			</AspectRatio>
			<Stack px="5" pt="4" spacing="1" pb="0">
				<Text fontWeight="medium">Cozy Dome</Text>
				<Text fontWeight="regular" fontSize="sm" color={"fg-subtle"}>
					25 Guests
				</Text>
			</Stack>
			<CardFooter pt="0">
				<Spacer />
				<Text fontWeight="regular" fontSize="sm">
					$3300/night
				</Text>
			</CardFooter>
			<IconButton
				aria-label="Add to favorites"
				variant="solid"
				icon={
					<Heart fill={Math.random() > 0.5 ? "red" : "white"} stroke="red" />
				}
				position="absolute"
				top={2}
				right={2}
				size="md"
				isRound
				backgroundColor="white"
				_hover={{
					background: "gray.300",
				}}
			/>
		</Card>
	);
}

export default HotelCard;
