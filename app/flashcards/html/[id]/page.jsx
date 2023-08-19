import FlashcardMain from "@/app/components/flashcardsPage/FlashcardMain";

function page( { params: { id } }) {
  const category = "html";
  return <FlashcardMain category={category} difficulty={id} />;
}
export default page;
