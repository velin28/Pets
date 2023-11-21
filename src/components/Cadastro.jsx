import { useState } from "react";

function Cadastro({addAnimal}){
    const [local, setLocal] = useState('')
    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('');
    const [raca, setRaca] = useState('');
    const [foto, setFoto] = useState('');
    const [estado, setEstado] = useState('');

    const enviarDados = (e) => {
        e.preventDefault();
        //alert("Descrição: " + descricao)
        //Validação quando o usuario nao digita algo

        if(!local && !nome && !foto && !contato && !raca && !estado) return;


        addAnimal(nome, contato, foto, local, raca, estado);

        setLocal('')
        setNome('')
        setContato('')
        setFoto('')
        
    }

    return(
        <>
            <h1>Cadastrar</h1>
            <div className="cadastrar">
                <form onSubmit={enviarDados}>
                <input type="text" className="hi" value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Localização"/>
                <input type="text" className="hi" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="Imagem"/>
                <div className="selecionar">
                <div className="raça">
                <select className="he"  onChange={(e) => setRaca(e.target.value)}>
                    <option value='Pomerânia (Spitz Alemão)'>Pomerânia (Spitz Alemão)</option>
                    <option value='Bulldog Francês'>Bulldog Francês</option>
                    <option value='Shih Tzu'>Shih Tzu</option>
                    <option value='Rottweiler'>Rottweiler</option>
                    <option value='Pug'>Pug</option>
                    <option value='Golden Retriever'>Golden Retriever</option>
                    <option value='Pastor Alemão'>Pastor Alemão</option>
                    <option value='Yorkshire Terrier'>Yorkshire Terrier</option>
                    <option value='Border Collie'>Border Collie</option>
                    <option value='SRD (Sem Raça Defenida)'>SRD (Sem Raça Defenida)</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="sit">
                <select className="he" onChange={(e) => setEstado(e.target.value)}>
                    <option value='Perdido'>Perdido</option>
                    <option value='Resgatado'>Resgatado</option>
                </select>
            </div>
        </div>
            <h1>QUEM VOCÊ É?</h1>
        <div>
        <div>
            <input className="hi" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Informe seu nome... " />
        </div>
        <div className="info_pes">
            <input className="contado" onChange={(e) => setContato(e.target.value)} type="text" placeholder="Informe um meio de contado... " />
        </div>
        </div>     
        <button className="botaoCadastrar" type="submit"><b>Cadastrar</b></button>   
                </form>
                
            </div>
        </>
    )
}

export default Cadastro