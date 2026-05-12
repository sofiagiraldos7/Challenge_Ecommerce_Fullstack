function ProductTitle({ title }) {
  return (
    <h2
      className="text-sm font-bold text-gray-800 mt-2 line-clamp-2 min-h-10"
      title={title}
    >
      {title}
    </h2>
  );
}
export default ProductTitle;