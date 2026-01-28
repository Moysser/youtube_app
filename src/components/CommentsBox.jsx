import { CircleUserRound } from "lucide-react";

const Comment = () => {
  return (
    <div className="flex">
      <CircleUserRound size={40} />
      <div className="px-3">
        <p className="font-bold">name</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          rerum aperiam quas incidunt, animi consequuntur saepe repellat at
          modi! Sed rem ratione similique laborum, quis sapiente animi dolor
          porro temporibus.
        </p>
      </div>
    </div>
  );
};

const CommentsBox = () => {
  return (
    <div className="m-5 p-2">
      <Comment />
    </div>
  );
};

export default CommentsBox;
