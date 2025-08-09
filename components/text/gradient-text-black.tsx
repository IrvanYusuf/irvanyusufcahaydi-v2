interface GradientTextBlackProps {
  text: string;
}
const GradientTextBlack = ({ text }: GradientTextBlackProps) => {
  return (
    <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-emerald-600 group-hover:to-emerald-500">
      {text}
    </span>
  );
};

export default GradientTextBlack;
