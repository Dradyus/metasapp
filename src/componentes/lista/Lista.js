import Meta from "./Meta";

const listaMock = [{
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "Día",
    "eventos": 1,
    "icono": "🏃‍♂️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5,
},
{
    "id": "2",
    "detalles": "Viajar",
    "periodo": "mes",
    "eventos": 1,
    "icono": "✈",
    "meta": 60,
    "plazo": "2030-01-01",
    "completado": 40
},
{
    "id": "3",
    "detalles": "Leer libros",
    "periodo": "Año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0
}
]

function Lista() {
    return (
        listaMock.map(meta => <Meta {...meta}></Meta>)
     );
}

export default Lista;
