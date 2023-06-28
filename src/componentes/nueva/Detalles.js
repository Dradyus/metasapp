import estilos from "./Detalles.module.css"
function Detalles() {
    const frecuencias =["dia", "semana", "mes", "año"];
    const iconos = ["💻","🏃‍♂️","📚","✈","💵","🚲","🧘‍♀️"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                    <label className="label">
                        Describe tu meta
                        <input
                        className="input"
                        placeholder="ej. 52 caminatas"/>
                    </label>
                    <label className="label">
                        ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                        <div className="flex mb-6">
                            <input
                            className="input"
                            type="number" />
                            <select className="input">
                                    {frecuencias.map(opcion => <option value={opcion}>{opcion}</option>)}
                            </select>
                        </div>
                    </label>
                    <label className="label">
                        ¿Cuántas veces deseas completar esta meta?
                        <input
                        className="input"
                        type="number" />
                    </label>
                    <label className="label">
                        Selecciona la fecha límite para cumplir tu meta
                        <input
                        className="input"
                        type="date" />
                    </label>
                    <label className="label">
                        ¿Cuántas veces haz completado ya esta meta?
                        <input
                        className="input"
                        type="number" />
                    </label>
                    <label className="label">
                        Escoge un ícono para la meta
                        <select className="input">
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;
