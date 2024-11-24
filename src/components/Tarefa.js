function Tarefa() {
    return (
        <div className="bg-textoNormal py-3 flex items-center justify-between rounded-sm">
            <div className="flex items-center">
                <button className="ml-2 mr-3">
                    <img className="w-[19px] h-[19px]" src="/check_circle.png"></img>
                </button>

                <span className="font-workSans font-medium text-lg text-textoConfig">Ler(Água Funda)</span>
            </div>

            <span className="font-workSans font-medium text-lg text-textoConfig mr-6">2/2</span>
        </div>
    );
}

export default Tarefa;