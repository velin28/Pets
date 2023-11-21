function Animal({item, concluir, remover}){
    return (
        <div className='animais'>
             <img className="img" src={item.foto}/>
            <span style={{textDecoration: item.isFinalizado ? 'line-through' : ''}}><p>{item.local}</p><p>{item.raca}</p><p>{item.estado}</p><p>{item.nome}</p><p>{item.contato}</p></span>
            <div className='acoes'>
              <button className='botaoConcluir' onClick={() => concluir(item.id)}>Concluir</button>
              <button className='botaoRemover' onClick={() => remover(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default Animal;