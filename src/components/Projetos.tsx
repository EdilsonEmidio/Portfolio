export default function Projetos() {

   return (
      <div className='bg-neutral-800 p-10 rounded-lg relative
         border border-neutral-500 mr-5 ml-5 sm:ml-0'>
         <ul className='list-disc text-md pl-5'>
            <li>
               <strong>E-commerce simplificado: </strong>
               Usando Spring boot com React e MariaDB, simulando os requisitos chave de um e-commerce padrão, com autenticação de token JWT, Diferenciação entre usuarios de diferentes categorias e sistema de gerenciamento de produtos.
            </li>
            <br />
            <li>
               <strong>Sistema de criptografia:</strong> 
               Uso de chaves assimétricas (RSA) e simétricas (AES) para criptografar os dados de uma ponta a outra, e garantir a integridade e segurança dos dados.
            </li>
            <br />
            <li>
               <strong>Sistema de recomendação:</strong> 
               Algoritmo em python, para recomendar jogos baseado no tipo de perfil de usuario seguindo varios critérios como gênero, plataforma, avaliações e preço, integrado à API da steam.
            </li>
         </ul>
      </div>
   )
}