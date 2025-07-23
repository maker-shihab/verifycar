import { Review } from "@/types/types";

interface ReviewCardProps {
  review: Review;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="space-y-3 bg-[#282828] rounded-xl p-8">
      <h3 className="text-xl md:text-3xl font-semibold">{review.title}</h3>
      <p className="text-[#D0D0D0] text-base md:text-lg ellipsis-210">{review.content}</p>
      <div className="flex flex-col pt-2">
        <h4 className="font-semibold text-base md:text-xl">{review.clientName}</h4>
        <p className="text-[#D0D0D0] text-sm md:text-base">{review.clientRole}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
