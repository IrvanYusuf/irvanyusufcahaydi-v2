interface GradientTextProps {
  text: string;
}

const GradientText = ({ text }: GradientTextProps) => {
  return (
    <span className="bg-gradient-to-r ml-2 from-sky-500 to-sky-600 bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default GradientText;
