import { useState, useEffect, useContext } from "react";
import estilos from "./Detalles.module.css"
import { Contexto } from "../../servicios/Memoria";
import { useNavigate } from "react-router-dom";
function Detalles() {

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃‍♂️',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const [estado, enviar] = useContext(Contexto);

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;
    const onChange = (event, prop) => {
        setForm(estado => ({...estado, [prop]: event.target.value}));
    }

    useEffect(() =>{
        //* console.log(form);
    }, [form]);

    const crear = async () => {
        //console.log(form);
        enviar({tipo: 'crear', meta: form});
        navegar('/lista');
    }
    const navegar = useNavigate();

    const frecuencias =["dia", "semana", "mes", "año"];
    const iconos = ["💻","🏃‍♂️","📚","✈","💵","🚲","🧘‍♀️"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                    <label className="label">
                        Describe tu meta
                        <input
                        className="input"
                        placeholder="ej. 52 caminatas"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                        />

                    </label>
                    <label className="label">
                        ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                        <div className="flex mb-6">
                            <input
                            className="input"
                            type="number"
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')}/>
                            <select
                            value={periodo}
                            className="input"
                            onChange={e => onChange(e, 'periodo')}>
                                    {frecuencias.map(opcion => <option value={opcion}>{opcion}</option>)}
                            </select>
                        </div>
                    </label>
                    <label className="label">
                        ¿Cuántas veces deseas completar esta meta?
                        <input
                        className="input"
                        type="number"
                        value={meta}
                        onChange={e => onChange(e, 'meta')}/>
                    </label>
                    <label className="label">
                        Selecciona la fecha límite para cumplir tu meta
                        <input
                        className="input"
                        type="date"
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}/>
                    </label>
                    <label className="label">
                        ¿Cuántas veces haz completado ya esta meta?
                        <input
                        className="input"
                        type="number"
                        value={completado}
                        onChange={e => onChange(e, 'completado')}/>
                    </label>
                    <label className="label">
                        Escoge un ícono para la meta
                        <select
                        className="input"
                        value= {icono}
                        onChange={e => onChange(e, 'icono')}
                        >
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </label>
            </form>
            <div className={estilos.botones}>
                <button
                className="boton boton--negro"
                onClick={crear}
                >Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;
