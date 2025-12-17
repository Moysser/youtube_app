import Button from "./Button";

//to be optimized
const ButtonList = () => {
  return (
    <div className="flex gap-2 pt-2">
      <Button name="All" />
      <Button name="Shorts" />
      <Button name="Videos" />
      <Button name="Watched" />
      <Button name="Recently Uploaded" />
      <Button name="Live" />
    </div>
  );
};

export default ButtonList;
