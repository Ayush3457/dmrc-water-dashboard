export default function StatCard({
  title,
  value
}) {
  return (
    <div className="
    bg-white
    p-5
    rounded-xl
    shadow-lg
    hover:shadow-xl
    transition
    duration-300
    cursor-pointer
    ">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}