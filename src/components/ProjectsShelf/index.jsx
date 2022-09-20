import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './styles.scss';
import 'swiper/css';
export const ProjectShelf = ({ projects }) => {
	if (!projects) return null;

	const isMobile = window.innerWidth < 640;

	return (
		<Swiper
			spaceBetween={isMobile ? 20 : 50}
			slidesPerView={isMobile ? 2 : 3}
			autoplay={{
				delay: 1500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
		>
			{projects.map((project, i) => (
				<SwiperSlide key={i}>
					<div className="project-container">
						<a target="__blank" href={project.html_url}>
							<p>{project.name}</p>
						</a>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
