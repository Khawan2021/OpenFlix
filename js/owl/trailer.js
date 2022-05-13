let r = document.documentElement;
let link1 = document.getElementById("bttrailer");
let link2 = document.getElementById("btinfo");
let item1 = document.querySelector('#games');
let item2 = document.querySelector('#viki');
let item3 = document.querySelector('#valha');
let item4 = document.querySelector('#ani');
let item5 = document.querySelector('#cava');
let item6 = document.querySelector('#morb');
let item7 = document.querySelector('#peak');
let item8 = document.querySelector('#halo');
let item9 = document.querySelector('#bat');
let item10 = document.querySelector('#sem');
let item11 = document.querySelector('#cori');
let item12 = document.querySelector('#proje');
let item13 = document.querySelector('#dr');
let titulo = document.querySelector('#titulo');
let descricao = document.querySelector('#descricao');

item1.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=gcTkNV5Vg1E";
    link2.href="https://www.adorocinema.com/series/serie-7157/";
    r.style.setProperty('--capa', "url('/img/Thrones.jpg')");
    titulo.innerText = 'Game of Thrones';
    descricao.innerText = 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto';

});

item2.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=9GgxinPwAGc";
    link2.href="https://www.tecmundo.com.br/minha-serie/vikings/noticias";
    r.style.setProperty('--capa', "url('/img/Ragnar.jpg')");
    titulo.innerText = 'Vikings';
    descricao.innerText = 'Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra.';
});

item3.addEventListener('click', () =>{
    link1.href="https://www.youtube.com/watch?v=nHMQBg6Zduc";
    link2.href="https://aodisseia.com/vikings-valhalla-todos-detalhes-serie-netflix/";
    r.style.setProperty('--capa', "url('/img/Groelandes.jpg')");
    titulo.innerText = 'Vikings Valhalla';
    descricao.innerText = 'Nesta sequência de Vikings, cem anos se passaram. Uma nova geração de heróis lendários cria seu destino e faz história.';
});

item4.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=LcCrLZceCmg";
    link2.href="https://www.uol/entretenimento/especiais/animais-fantasticos-e-onde-habitam.htm#animais-fantasticos";
    r.style.setProperty('--capa', "url('/img/Bruxo.jpg')");
    titulo.innerText = 'Animais Fantásticos';
    descricao.innerText = ' O mundo mágico está em perigo, pois o poderoso mago das trevas Gellert Grindelwald deseja tomar o controle. Para impedir que isso aconteça, o professor Alvo Dumbledore precisará de ajuda do magizoologista Newt Scamander à frente de uma equipe corajosa. Juntos, eles encontrarão os animais fantásticos em uma épica batalha contra a crescente legião de seguidores do malévolo Grindelwald.';
});

item5.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=DFa0evfX96s";
    link2.href="https://www.tecmundo.com.br/minha-serie/236238-cavaleiro-lua-voce-precisa-saber-ver-serie.htm#:~:text=Cavaleiro%20da%20Lua%2C%20nova%20série,do%20mercenário%20implacável%2C%20Marc%20Spector.";
    r.style.setProperty('--capa', "url('/img/lua.jpg')");
    titulo.innerText = 'Cavaleiro da Lua';
    descricao.innerText = 'A série acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal entre os poderosos deuses do Egito.';
});

item6.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=S55qvOKW5T0";
    link2.href="https://cinema10.com.br/filme/morbius";
    r.style.setProperty('--capa', "url('/img/Vampiro.jpg')");
    titulo.innerText = 'Morbius';
    descricao.innerText = 'Durante um experimento para encontrar a cura de uma rara doença sanguínea, o Dr. Michael Morbius acidentalmente se transforma num sanguinário vampiro.';
});

item7.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=oVzVdvGIC7U";
    link2.href="https://seuladogeek.com.br/cinema/peaky-blinders/";
    r.style.setProperty('--capa', "url('/img/Ciganos.jpg')");
    titulo.innerText = 'Peaky Brinders';
    descricao.innerText = 'Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.';
});

item8.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=5KZ3MKraNKY";
    link2.href="https://www.universosagas.com.br/halo-saiba-tudo-sobre-a-serie/#:~:text=Em%20Halo%2C%20uma%20épica%20batalha,genocida%20contra%20a%20raça%20humana.";
    r.style.setProperty('--capa', "url('/img/Soldado.jpg')");
    titulo.innerText = 'Halo';
    descricao.innerText = 'Uma épica batalha acontece no durante o século XXVI entre a raça humana e uma espécie alienígena conhecida como Covenant.';
});

item9.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=rsQEor4y2hg";
    link2.href="https://seuladogeek.com.br/cinema/batman-2022/";
    r.style.setProperty('--capa', "url('/img/Morcego.jpg')");
    titulo.innerText = 'Batman';
    descricao.innerText = 'Após dois anos espreitando as ruas como Batman e aterrorizando o mundo do crime, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com pouquíssimos aliados confiáveis dentro da rede corrupta de autoridades e grandes figuras da cidade, o vigilante solitário se estabeleceu como a personificação da vingança para a população.';
});

item10.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=CyiiEJRZjSU";
    link2.href="https://www.papodecinema.com.br/filmes/homem-aranha-sem-volta-para-casa/";
    r.style.setProperty('--capa', "url('/img/Peters.jpg')");
    titulo.innerText = 'Homem Aranha Sem Volta para Casa';
    descricao.innerText = 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.';
});

item11.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=jfVTJm9NilA";
    link2.href="https://www.omelete.com.br/oscar-2021/coringa-filme/coringa-tudo-sobre#15";
    r.style.setProperty('--capa', "url('/img/Palhaco.jpg')");
    titulo.innerText = 'Coringa';
    descricao.innerText = 'Um comediante falido enlouquece e se torna um assassino psicopata.';
});

item12.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=miycJHABS1w";
    link2.href="https://canaltech.com.br/entretenimento/critica-o-projeto-adam-netflix-211231/";
    r.style.setProperty('--capa', "url('/img/Adam.jpg')");
    titulo.innerText = 'Projeto Adam';
    descricao.innerText = 'Depois de viajar no tempo e ir parar em 2022 sem querer, o piloto de combate Adam Reed se une à sua versão de 12 anos de idade para salvar o futuro.';
});

item13.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=MczMB8nU1sY";
    link2.href="https://tudopop.net/serie-house-critica-elenco-sinopse-e-temporadas";
    r.style.setProperty('--capa', "url('/img/House.jpg')");
    titulo.innerText = 'Dr. House';
    descricao.innerText = 'Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.';
});