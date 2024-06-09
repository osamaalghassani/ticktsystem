type Props = {
  readonly details: string;
  readonly title: string;
};
export const TitleSection = ({ details, title }: Props) => {
  return (
    <div className="text-center my-7 py-5">
      <h3 className="text-[#1D4ED8] text-2xl lg:text-3xl font-bold">{title}</h3>
      <p className="text-base  lg:text-xl font-normal">{details}</p>
    </div>
  );
};
