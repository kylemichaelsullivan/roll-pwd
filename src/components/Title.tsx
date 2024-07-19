type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <h1 className='Title text-center'>{title}</h1>;
}

export default Title;
