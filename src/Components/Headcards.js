import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';

function Headcards() {
	return (
		<div>
			<Carousel interval={2000} variant='dark'>
				<Carousel.Item>
					<MDBRow>
						<MDBCol>
							<MDBCard style={{ maxWidth: '250rem' }}>
								<MDBCardBody>
									<div className='hcard-container'>
										<div class='service-details'>
											<img
												src='./images/lady-img.jpg'
												alt='realm'
												className='hcard-img'
											/>
											<div className='service-hover-text'>
												<h3>Aritra Banerjee</h3>
												<h4></h4>
												<p>
													In 2020, Andy - a 2 year
													old, Shih Tzu, was found
													abandoned in Bengaluru with
													a hemorrhaging eye, and a
													congenital defect in her
													hind leg that has no
													flexible joints from the hip
													downwards. Andy is a cute
													girl! She has suffered
													enough and from now on she
													will only know happiness and
													smiles.{' '}
												</p>
											</div>
											<div className='service-white service-text'>
												<p>
													Very grateful to this
													community for raising
													awareness about animal
													cruelty and providing them a
													forever home.
												</p>
											</div>
										</div>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</Carousel.Item>

				<Carousel.Item>
					<MDBRow>
						<MDBCol>
							<MDBCard style={{ maxWidth: '100rem' }}>
								<MDBCardBody>
									<div className='hcard-container'>
										<div class='service-details'>
											<img
												src='./images/dog-img.jpg'
												alt='realm'
												className='hcard-img'
											/>
											<div className='service-hover-text'>
												<h3>Soham Das</h3>
												<h4></h4>
												<p>
													A white ball of fur with the
													most beautiful brown eyes
													that can captivate us
													instantly. Honey, a 10 month
													old, Labrador Retriever,
													true to his name is as sweet
													and playful a kid as one can
													ever find!{' '}
												</p>
											</div>
											<div className='service-white service-text'>
												<p>
													I am so happy to be
													associated with the
													community and help
													animals.It is indeed a
													pleasure for me.
												</p>
											</div>
										</div>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</Carousel.Item>

				<Carousel.Item>
					<MDBRow>
						<MDBCol>
							<MDBCard style={{ maxWidth: '100rem' }}>
								<MDBCardBody>
									<div className='hcard-container'>
										<div className='service-details'>
											<div className='dog-details'>
												<div className='service-details-img'>
													<img
														src='./images/dog-img.jpg'
														alt='realm'
														className='hcard-img'
													/>{' '}
												</div>

												<div className='service-hover-text'>
													<h3>Jane Doe</h3>
													<h4>Developer</h4>
													<p>
														Nulla rhoncus orci sed
														odio euismod vestibulum.
														Praesent porta aliquet
														nulla, ut mattis velit
														rhoncus eu duspendisse
														nibh orci laoreet.{' '}
													</p>
												</div>
											</div>
											<div className='service-white service-text'>
												<p>
													I am so happy to be
													associated with the
													community and help
													animals.It is indeed a
													pleasure for me .
												</p>
											</div>
										</div>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
export default Headcards;
