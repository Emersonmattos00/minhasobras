export default function Watermark() {
  return (
    <div className="absolute inset-0 bg-[url('/watermark.png')] bg-repeat opacity-20 pointer-events-none" />
  );
}
