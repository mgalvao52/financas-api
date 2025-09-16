import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    const bancos = await prisma.banco.findMany();
    if(bancos.length <= 0){
        await prisma.banco.createMany({
            data:[
                {nome:"Itau"},
                {nome:"Santander"},
                {nome:"MercadoPago"},
                {nome:"Nubank"},
                {nome:"Bradesco"},
                {nome:"Caixa"},
                {nome:"Banco do Brasil"},
                {nome:"Mercantil"}
            ]
        })
    }
    prisma.$disconnect();
}


seed().catch(e=>{
    console.log(e);
    prisma.$disconnect();
    process.exit(1);
})