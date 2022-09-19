import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './styles.scss';
import 'swiper/css';
export const ProjectShelf = ({ projects }) => {
	if (!projects) return null;
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
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
