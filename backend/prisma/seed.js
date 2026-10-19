const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seeding de la base de données...')

  // ==========================================
  // 1. GÉNÉRATION DES 5 AVIONS DIFFÉRENTS
  // ==========================================

  // Avion 1 : Airbus A330-200
  const plane1 = await prisma.plane.upsert({
    where: { immatriculation: 'F-GCAV' },
    update: {
      model: 'Airbus A330-200',
      manufactureYear: 2015,
      tankCapacity: 139000,
      speed: 871.5,
      passengerCapacity: 250,
      maxDistance: 13450,
      planeCost: 240000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
    create: {
      immatriculation: 'F-GCAV',
      model: 'Airbus A330-200',
      manufactureYear: 2015,
      tankCapacity: 139000,
      speed: 871.5,
      passengerCapacity: 250,
      maxDistance: 13450,
      planeCost: 240000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
  })

  // Avion 2 : Airbus A320-200
  const plane2 = await prisma.plane.upsert({
    where: { immatriculation: 'F-GKXN' },
    update: {
      model: 'Airbus A320-200',
      manufactureYear: 2018,
      tankCapacity: 27200,
      speed: 828.0,
      passengerCapacity: 174,
      maxDistance: 6100,
      planeCost: 101000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
    create: {
      immatriculation: 'F-GKXN',
      model: 'Airbus A320-200',
      manufactureYear: 2018,
      tankCapacity: 27200,
      speed: 828.0,
      passengerCapacity: 174,
      maxDistance: 6100,
      planeCost: 101000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
  })

  // Avion 3 : ATR 72-600
  const plane3 = await prisma.plane.upsert({
    where: { immatriculation: 'F-HOPY' },
    update: {
      model: 'ATR 72-600',
      manufactureYear: 2021,
      tankCapacity: 5000,
      speed: 510.0,
      passengerCapacity: 72,
      maxDistance: 1500,
      planeCost: 26000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
    create: {
      immatriculation: 'F-HOPY',
      model: 'ATR 72-600',
      manufactureYear: 2021,
      tankCapacity: 5000,
      speed: 510.0,
      passengerCapacity: 72,
      maxDistance: 1500,
      planeCost: 26000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
  })

  // Avion 4 : Cessna 172 Skyhawk
  const plane4 = await prisma.plane.upsert({
    where: { immatriculation: 'F-GAUR' },
    update: {
      model: 'Cessna 172 Skyhawk',
      manufactureYear: 2010,
      tankCapacity: 212,
      speed: 230.0,
      passengerCapacity: 4,
      maxDistance: 1280,
      planeCost: 400000.00,
      status: 'MAINTENANCE',
      updatedAt: new Date(),
    },
    create: {
      immatriculation: 'F-GAUR',
      model: 'Cessna 172 Skyhawk',
      manufactureYear: 2010,
      tankCapacity: 212,
      speed: 230.0,
      passengerCapacity: 4,
      maxDistance: 1280,
      planeCost: 400000.00,
      status: 'MAINTENANCE',
      updatedAt: new Date(),
    },
  })

  // Avion 5 : Dassault Falcon 8X
  const plane5 = await prisma.plane.upsert({
    where: { immatriculation: 'F-HGVX' },
    update: {
      model: 'Dassault Falcon 8X',
      manufactureYear: 2023,
      tankCapacity: 15830,
      speed: 900.0,
      passengerCapacity: 14,
      maxDistance: 11945,
      planeCost: 58000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
    create: {
      immatriculation: 'F-HGVX',
      model: 'Dassault Falcon 8X',
      manufactureYear: 2023,
      tankCapacity: 15830,
      speed: 900.0,
      passengerCapacity: 14,
      maxDistance: 11945,
      planeCost: 58000000.00,
      status: 'ACTIVE',
      updatedAt: new Date(),
    },
  })

  // ==========================================
  // 2. GÉNÉRATION DES 3 UTILISATEURS (ROLES)
  // ==========================================

  const userAdmin = await prisma.user.upsert({
    where: { email: 'admin@aeroclub.com' },
    update: {
      role: 'ADMINISTRATOR',
      firstName: 'Jean',
      lastName: 'Dupont',
      password: 'password_admin_123',
      phone: '0601020304',
    },
    create: {
      role: 'ADMINISTRATOR',
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'admin@aeroclub.com',
      password: 'password_admin_123',
      phone: '0601020304',
    },
  })

  const userPilot = await prisma.user.upsert({
    where: { email: 'thomas.pesquet@aeroclub.com' },
    update: {
      role: 'PILOT',
      firstName: 'Thomas',
      lastName: 'Pesquet',
      password: 'password_pilot_456',
      phone: '0611223344',
    },
    create: {
      role: 'PILOT',
      firstName: 'Thomas',
      lastName: 'Pesquet',
      email: 'thomas.pesquet@aeroclub.com',
      password: 'password_pilot_456',
      phone: '0611223344',
    },
  })

  const userCustomer = await prisma.user.upsert({
    where: { email: 'client.mystere@gmail.com' },
    update: {
      role: 'CUSTOMER',
      firstName: 'Alice',
      lastName: 'Martin',
      password: 'password_customer_789',
      phone: '0699887766',
    },
    create: {
      role: 'CUSTOMER',
      firstName: 'Alice',
      lastName: 'Martin',
      email: 'client.mystere@gmail.com',
      password: 'password_customer_789',
      phone: '0699887766',
    },
  })

  console.log('✅ Seeding terminé avec succès et aligné sur le schéma !')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Erreur détectée pendant le seeding :', e)
    await prisma.$disconnect()
    process.exit(1)
  })
