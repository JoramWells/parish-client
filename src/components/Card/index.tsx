import LoginHeader from '../LoginHeader';

type Props = {
    text: StringConstructor
}

const index = ({ text }: Props) => (
  <div className="m-auto block bg-white p-2 rounded-lg w-1/2 lg:w-1/2 md:w-48">
    <LoginHeader text={`${text}`} />

  </div>
    );

export default index;
