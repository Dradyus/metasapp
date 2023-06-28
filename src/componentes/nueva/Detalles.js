function Detalles() {
    const frecuencias =["dia", "semana", "mes", "año"];
    const iconos = ["💻","🏃‍♂️","📚","✈","💵","🚲","🧘‍♀️"];

    return (
        <div>
            <form>
                    <label>
                        Describe tu meta
                        <input placeholder="ej. 52 caminatas"/>
                    </label>
                    <label>
                        ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                        <div>
                            <input type="number" />
                            <select>
                                    {frecuencias.map(opcion => <option value="{opcion}">{opcion}</option>)}
                                    <option value="a la semana"></option>
                                    <option value="al mes"></option>
                                    <option value="al año"></option>
                            </select>
                        </div>
                    </label>
                    <label>
                        ¿Cuántas veces deseas completar esta meta?
                        <input type="number" />
                    </label>
                    <label>
                        Selecciona la fecha límite para cumplir tu meta
                        <input type="date" />
                    </label>
                    <label>
                        ¿Cuántas veces haz completado ya esta meta?
                        <input type="number" />
                    </label>
                    <label>
                        Escoge un ícono para la meta
                        <select>
                            {iconos.map(opcion => <opcion value={opcion}>{opcion}</opcion>)}
                        </select>
                    </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;
