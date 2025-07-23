import ReviewCard from "@/components/ReviewCard";
import { heroContent, testimonialContent } from "@/content/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Review() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          <h2 className="bg-gradient-text text-gradient text-2xl md:text-5xl font-bold">
            {heroContent.title}
          </h2>
          <p className="text-base md:text-xl font-normal max-w-md">
            {heroContent.subtitle}
          </p>
        </div>

        <div className="space-y-10 pt-12 md:pt-24">
          <div className="flex flex-col">
            <h2 className="bg-gradient-text text-gradient text-2xl md:text-5xl font-bold">
              {testimonialContent.sectionTitle}
            </h2>
            <p className="text-base md:text-xl font-normal">
              {testimonialContent.sectionDescription}
            </p>
          </div>

          <div className="py-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 28,
                },
              }}
              className="mySwiper"
            >
              {testimonialContent.reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review