type Props = {
    children: String
}

function Index({ children }: Props) {
    return (
      <div className="p-2">{children}</div>
    );
}

export default Index;
