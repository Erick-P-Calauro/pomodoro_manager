function Timer() {
    return (
        <div className="bg-produtividade py-6 rounded-md">
            <div className="mx-5 flex items-center justify-between">
                <button className="bg-produtividade2 rounded-sm px-2 py-3 flex">
                    <span className="text-textoNormal text-sm  font-medium font-workSans">Produtividade</span>
                </button>
                <button className="rounded-sm px-2 py-3 flex">
                    <span className="text-textoNormal text-sm  font-medium font-workSans">Descanso<br /> Curto</span>
                </button>
                <button className="rounded-sm px-2 py-3 flex">
                    <span className="text-textoNormal text-sm font-medium font-workSans">Descanso <br /> Longo</span>
                </button>
            </div>

            <div className="w-full flex flex-col items-center space-y-2">
                <span className="text-sm-timer text-textoNormal font-extrabold font-workSans">20:00</span>

                <button className="bg-textoNormal text-produtividade py-1.5 px-11 rounded-sm flex items-center justify-center">
                    <span className="font-medium text-lg font-workSans">Iniciar</span>
                </button>
            </div>
        </div>
    );
}

export default Timer;