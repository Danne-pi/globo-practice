//Informações (POSTS)
const jcontent = {
    'posts' : [
        {
            'img' : '0101',
            'imgsize' : '1',
            'tag' : 'Além do presidente',
            'tagcolor' : '1',
            'title' : 'CPI deve pedir indiciamento de filhos de Bolsonaro',
            'sub' : 'A evangélicos, Bolsonaro diz ‘chorar sozinho em casa’'
        },
        {
            'img' : '0102',
            'imgsize' : '1',
            'tag' : 'Crimes na fronteira',
            'tagcolor' : '1',
            'title' : 'Triângulo amoroso vira chave em linha de investigação',
            'sub' : '1ª de 7 mortes entre Brasil e Paraguai faz 1 semana'
        },
        {
            'img' : '0103',
            'imgsize' : '1',
            'tag' : 'Reino Unido',
            'tagcolor' : '1',
            'title' : 'Parlamentar inglês é esfaqueado e morto em igreja',
            'sub' : 'Homem de 25 anos foi preso no local, diz polícia'
        },
        {
            'img' : '',
            'imgsize' : '2',
            'tag' : 'Sabatina de Mendonça',
            'tagcolor' : '1',
            'title' : 'PGR é consultada sobre investigação contra Alcolumbre',
            'sub' : 'Aliados dizem que situação de Alcolumbre ‘está feia’'
        },
        {
            'img' : '',
            'imgsize' : '2',
            'tag' : 'Negócio de R$ 5,2 bi',
            'tagcolor' : '1',
            'title' : 'Pão de Açúcar vende 71 pontos do Extra para o Assaí',
            'sub' : 'Lembre fusões e aquisições bilionárias recentes no país'
        },
        {
            'img' : '',
            'imgsize' : '2',
            'tag' : 'Elo com caminhoneiros',
            'tagcolor' : '1',
            'title' : 'Podcast: ministro liga empresários a atos de 7/9; ouça',
            'sub' : 'Neto de Jango critica veto de Bolsonaro a tributo'
        },
        {
            'img' : '0201',
            'imgsize' : '3',
            'tag' : 'Espião estatístico',
            'tagcolor' : '2',
            'title' : 'Classificação do returno tem Palmeiras em último; veja as posições',
            'sub' : 'Crespo almoça com diretoria e deve se despedir no CT'
        },
        {
            'img' : '0202',
            'imgsize' : '3',
            'tag' : 'Greve segue na Raposa',
            'tagcolor' : '2',
            'title' : 'Cruzeiro não viabiliza recurso para quitar atrasados',
            'sub' : ''
        },
        {
            'img' : '0203',
            'imgsize' : '3',
            'tag' : 'Campeonato francês',
            'tagcolor' : '2',
            'title' : 'Desfalcado, PSG recebe o Angers, 4º colocado',
            'sub' : ''
        },
        {
            'img' : '0301',
            'imgsize' : '3',
            'tag' : 'Férias e JH',
            'tagcolor' : '3',
            'title' : 'César Tralli se emociona na despedida do SP1',
            'sub' : ''
        },
        {
            'img' : '0302',
            'imgsize' : '3',
            'tag' : 'Verdades Secretas 2',
            'tagcolor' : '3',
            'title' : 'Angel cruza a passarela poderosa; reveja desfiles',
            'sub' : 'Blanche terá dois relacionamentos e Gabriel viverá sadomasoquista'
        },
        {
            'img' : '0303',
            'imgsize' : '3',
            'tag' : 'Nos Tempos do Imperador',
            'tagcolor' : '3',
            'title' : 'Lota vai cair em golpe',
            'sub' : 'Teresa toma decisão radical'
        }
    ]
}

//Abrindo Shadow para criação de elemento customizado
class GloboNews extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    
//Observador de atributo personalizado "post"
    static get observedAttributes(){
        return ['post'];
    }
//Puxa o valor definido no html
    get post(){
        return this.getAttribute("post");
    }
//Atribui o valor a uma variavel de mesmo nome dentro do JS
    set post(val){
        this.setAttribute("post", val)
    }

//Sobrescreve função no html de mesmo nome e implementa a função personalizada 'render'
    connectedCallback(){
        this.render();
    }
//Renderiza o Html fornecido abaixo, foi necessário implementar a estilização
//por aqui também, pois é uma peculiaridade do shadow e essa foi a sulução.
    render(){
        this.shadow.innerHTML=
`
<style>
a {
    text-decoration: none;
    display: block;
    color: inherit;
    transition: filter 300ms;
}
    
a:hover {
    filter: brightness(50%);
}
#basic-post{
    display: grid;
    width: 192px;
}
#img1{
    width: 193px;
    height: 110px;
    border-radius: 12px;
}
#img3{
    width: 240px;
    height: 128px;
    border-radius: 12px;
}
#post-tag1{
    padding: 10px 0 0 0;
    font-family: 'Encode Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #C4170C;
}
#post-tag2{
    padding: 10px 0 0 0;
    font-family: 'Encode Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #16AE54;
}
#post-tag3{
    padding: 10px 0 0 0;
    font-family: 'Encode Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #EC8006;
}
#title{
    padding: 6px 0 0 0;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.045em;
    color: #2F3134;
}
#sub{
    padding: 6px 0 0 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.048em;
    color: #2F3134;
    padding-bottom: 24px;
}
</style>

<a id="basic-post" href="https://globo.com" target="_blank">
    <img id="img${jcontent.posts[this.post].imgsize}" src="assets/images/${jcontent.posts[this.post].img}.jpeg" alt="">
    <span id="post-tag${jcontent.posts[this.post].tagcolor}">${jcontent.posts[this.post].tag}</span>
    <span id="title">${jcontent.posts[this.post].title}</span>
    <span id="sub">${jcontent.posts[this.post].sub}</span>
</a>
`; //Elemento que retribui a informação armazenada de acordo com o valor do atributo personalizado (post="X") fornecido. 
    }
}
//Exportação do Elemento Html customizado
customElements.define('globo-news', GloboNews);