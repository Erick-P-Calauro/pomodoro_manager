function Timer() {
    return (
        <div className="bg-produtividade py-6 rounded-md">
            <div className="grid grid-cols-8 gap-x-5">
                <button className="col-start-2 col-end-4 bg-produtividade2 rounded-sm">
                    <span className="text-textoNormal text-base font-medium font-workSans">Produtividade</span>
                </button>
                <button className="col-start-4 col-end-6 rounded-sm ">
                    <span className="text-textoNormal text-base font-medium font-workSans">Descanso<br /> Curto</span>
                </button>
                <button className="col-start-6 col-end-8 rounded-sm">
                    <span className="text-textoNormal text-base font-medium font-workSans">Descanso <br /> Longo</span>
                </button>
            </div>

            <div className="w-full flex flex-col items-center">
                <h2 className="text-[176px] text-textoNormal font-bold font-workSans">20:00</h2>

                <button className="bg-textoNormal text-produtividade py-3 px-11 rounded-sm">
                    <span className="font-medium text-3xl font-workSans">Iniciar</span>
                </button>
            </div>
        </div>
    );
}

export default Timer;