import { Injectable } from '@angular/core';
import { Projects } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  obterProjetos(): Projects[] {
    return [
      {
        id: '1',
        tag: 'SEO',
        cargo: 'REDATORA',
        descricao: `Nesse projeto, fui uma das redatoras que ficou encarregada de produzir até cinco artigos por dia. Os artigos possuem técnica de SEO Onpage como keywords, link building e inclusão de meta description. Além disso, todos artigos são postados e editados diretamente através do Wordpress. O trabalho é feito em conjunto com uma equipe de editores e outros redatores.`,
        siteEmpresa: 'https://www.sportingbet.com/pt-br/blog/author/camille-paoleschi/',
        empresa: 'Sportingbet',
        img: '/assets/images/Bitmap.png'
      },
      {
        id: '2',
        tag: 'SEO',
        cargo: 'REDATORA',
        descricao: `Nesse projeto, precisei realizar a estratégia de SEO Onpage do zero no blog da empresa. O blog não possuía nenhum artigo ainda. Sendo assim, fiz a busca de palavras-chaves baseadas no nicho de orçamentos, microempreendedores e finanças. A partir disso, passei a produzir artigos para o blog com keywords e linkbuilding e postar 3 vezes por semana. O blog passou de 0 visualizações para mais de 1000 após 6 meses.`,
        siteEmpresa: 'https://fazerorcamento.com/author/cammypaoleschi/',
        empresa: 'Fazer Orçamento',
        img: '/assets/images/Bitmap.png'
      },
      {
        id: '3',
        tag: 'SEO',
        cargo: 'REDATORA',
        descricao: `O projeto com a loja Menina Shoes foi de otimização de blogposts diversos e textos dentro do seu site. Os blogposts possuíam moda e tendências como seu principal tema. Técnicas como keywords e link building foram utilizadas. Além disso, fiquei encarregada de criar UTMs para ajudar a loja a compreender quais produtos estavam sendo buscados através dos artigos. O agendamento e construção de posts foi feito através do Wordpress.`,
        siteEmpresa: 'https://blog.meninashoes.com.br/author/camille-paoleschi/',
        empresa: 'Menina Shoes',
        img: '/assets/images/Bitmap.png'
      },
      {
        id: '4',
        tag: 'SOCIAL MEDIA',
        cargo: 'COPYWRITER',
        descricao: `Dentro da Begin Social Media, fiquei encarregada de cuidar da estratégia de conteúdo do perfil da Collab Space. Focamos no storytelling para contar a história do dono do coworking. Além disso, utilizamos imagens reais que nossa equipe audiovisual forneceu para vender o espaço, mostrando seus benefícios através de posts de fundo de funil.
        No total, o perfil tinha 12 posts mensais, entre eles haviam carrosseis, reels e posts estáticos. Eu fiquei encarregada da estratégia e todo o copy desses posts, além de orientar os designers e editores de vídeo.`,
        siteEmpresa: 'https://www.instagram.com/colab.space/',
        empresa: 'Collab Space',
        img: '/assets/images/Bitmap.png'
      },
      {
        id: '5',
        tag: 'SOCIAL MEDIA',
        cargo: 'COPYWRITER',
        descricao: `Ainda com a Begin Social Media, a Keep Sweet foi outro perfil que cuidei por meses. O objetivo principal era transmitir o propósito da marca: ajudar minorias e pessoas necessitadas através de ações que eram fundadas com os kits mensais da KS. A estratégia de conteúdo girava em torno do storytelling e do fundo de funil para atrair o público alvo para comprar a caixa do mês. No total, eram 12 posts mensais, entre eles haviam carrosseis, reels e posts estáticos. Eu fiquei encarregada da estratégia e todo o copy desses posts, além de orientar os designers e editores de vídeo.`,
        siteEmpresa: 'https://www.instagram.com/keepsweet.br/',
        empresa: 'Keep Sweet',
        img: '/assets/images/Bitmap.png'
      },
      {
        id: '6',
        tag: 'SOCIAL MEDIA',
        cargo: 'COPYWRITER',
        descricao: `Outra cliente que atendi na Begin Social Media foi Érica Gomes. Seu nicho era de contabilidade e o foco era topo e fundo de funil, alternando entre os posts. A ideia de sua estratégia era facilitar o entendimento do público sobre a contabilidade, usando palavras menos rebuscadas e o 'jeito' da contadora de ser. O perfil tinha 12 posts mensais, com todos formatos de post do Instagram. Eu produzia roteiros para a cliente e orientava os designers e editores de vídeo.`,
        siteEmpresa: 'https://www.instagram.com/ericagomescontadora/',
        empresa: 'Érica Gomes Contadora',
        img: '/assets/images/Bitmap.png'
      }
    ];
  }

}
