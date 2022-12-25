import React from 'react';
import {
	HomeContainer,
	ImageContainer,
	TextContainer,
	Screen,
	Title,
	SubTitle,
} from './styles';

export const Home = () => {
	return (
		<Screen>
			<HomeContainer>
				<ImageContainer />
				<TextContainer>
					<Title>
						Improve your front-end skills by building projects
					</Title>
					<SubTitle>
						Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
					</SubTitle>
				</TextContainer>
			</HomeContainer>
		</Screen>
	);
};
