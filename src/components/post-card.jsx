export default function PostCard({id, title, body }) {
  return (
    <div className="border rounded-lg p-2 flex justify-between items-center">
      <div>
        <h2 className="text-[18px] font-bold mb-[1px]">
          {id}
        </h2>
        <p className="text-base text-black mb-2">
          {title}
        </p>
        <span className="text-black text-[11px] px-[9px] py-[5px] rounded mr-[6px]">
          {body}
        </span>
      </div>
    </div>
  );
}
