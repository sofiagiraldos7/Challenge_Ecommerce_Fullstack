function ProductImage({ src, alt }) {
  return (
    <div className="w-full h-[150px] flex items-center justify-center bg-white">
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
export default ProductImage;