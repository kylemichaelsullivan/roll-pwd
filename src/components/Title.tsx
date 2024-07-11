type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <h1 className='Title text-3xl font-bold text-center'>{title}</h1>;
}

export default Title;