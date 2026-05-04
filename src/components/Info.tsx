const Info = () => {

    const showName = () => {
        console.log('Pedro')
    }

    return (
        <div className="mt-4 flex items-center w-full justify-between">
            <div className="flex flex-col gap-2">
                <p className="text-[#00A2F7] font-bold">Pratique com projetos reais</p>
                <p className="text-sm text-[#09A3FB] h-[38px] w-[640px]">Em vez de apenas ensinar teoria, focamos em código real para inspirar seu próximo
                    projeto. Aprender não precisa ser chato.
                </p>
                <button
                    className="bg-[#00A2F7] rounded-sm text-white w-[150px] h-[40px] cursor-pointer"
                    onClick={showName}
                >
                    Ver biblioteca
                </button>
            </div>
            <div className="flex flex-col bg-white border rounded-md border-[#F2F2F2] gap-1 p-2">
                <p className=" text-[#00A2F7] font-bold text-md">Curso rápido</p>
                <p className="text-sm text-[#00A2F7] w-[255px] h-[19px]">Cursos práticos de curta duração</p>
                <button className="border rounded-md w-[150px] h-[40px] cursor-pointer py-0.5 text-[#00A2F7]">Assistir</button>
            </div>
        </div>
    )
}

export default Info;