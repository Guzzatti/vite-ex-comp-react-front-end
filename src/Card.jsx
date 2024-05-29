export function Card({
  title,
  text,
  img,
  buttonLabel,
  buttonColor = 'primary',
}) {
  const colorMap = {
    vermelho: 'danger',
    azul: 'primary',
    verde: 'success',
  };

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="🐶" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {buttonLabel ? (
          <a
            href="#go"
            className={`btn btn-${colorMap[buttonColor] ?? buttonColor}`}
          >
            {buttonLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}
