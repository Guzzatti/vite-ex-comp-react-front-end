import { Card } from './Card';
import {
  FlexCard,
  CardThumb,
  CardTitle,
  CardText,
  CardButton,
} from './FlexCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex gap-3" style={{ marginBottom: '21px' }}>
        <Card
          img="https://picsum.photos/id/237/390/240"
          title="Teste"
          text="Outro texto"
          buttonLabel="bora meu!"
        />
      </div>
      <div className="d-flex gap-3">
        <FlexCard
          thumb={
            <CardThumb src="https://picsum.photos/id/237/390/240" alt="🐶" />
          }
        >
          <CardTitle title="Adote um Cachorrinho" style={{ color: 'red' }} />
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
          <CardButton label="Quero Adotar!" />
        </FlexCard>
        <FlexCard
          thumb={
            <CardThumb src="https://picsum.photos/id/237/390/240" alt="🐶" />
          }
        >
          <CardTitle title="Adote um Cachorrinho" style={{ color: 'red' }} />
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
        </FlexCard>
        <FlexCard
          thumb={
            <CardThumb src="https://picsum.photos/id/237/390/240" alt="🐶" />
          }
        >
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
        </FlexCard>
        <FlexCard>
          <CardTitle title="Adote um Cachorrinho" style={{ color: 'red' }} />
          <CardText text="Eles são muito fofinhos e destroem todos os seus móveis" />
          <CardButton label="Quero Adotar!" />
        </FlexCard>
      </div>
    </div>
  );
}

export default App;
