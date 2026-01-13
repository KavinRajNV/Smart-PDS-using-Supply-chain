// Mock data for SMART-PDS Platform

export const mockStats = {
  totalGrainTracked: 2847562,
  activeShipments: 147,
  fpsTransparencyScore: 87.5,
  totalFarmers: 156890,
  totalFPS: 3584,
  totalHouseholds: 1245678
};

export const mockFarmers = [
  {
    id: 'F001234',
    name: 'Raju K.',
    procurementDate: '2024-01-15',
    quantity: 2500,
    status: 'Procured',
    location: 'Thanjavur'
  },
  {
    id: 'F001235',
    name: 'Lakshmi M.',
    procurementDate: '2024-01-16',
    quantity: 3200,
    status: 'Procured',
    location: 'Trichy'
  }
];

export const mockShipments = [
  {
    id: 'SH001',
    truckNumber: 'TN-45-A-1234',
    from: 'Procurement Center - Thanjavur',
    to: 'Rice Mill - Trichy',
    status: 'In Transit',
    route: [
      { lat: 10.7905, lng: 79.1378, name: 'Thanjavur' },
      { lat: 10.8155, lng: 78.6965, name: 'Trichy' }
    ],
    loadedWeight: 25000,
    currentWeight: 24800,
    expectedArrival: '2024-01-17 14:00',
    qrLockStatus: 'Active',
    sensorReading: 24800
  },
  {
    id: 'SH002',
    truckNumber: 'TN-45-B-5678',
    from: 'Rice Mill - Trichy',
    to: 'TNCSC Godown - Chennai',
    status: 'On Route',
    route: [
      { lat: 10.8155, lng: 78.6965, name: 'Trichy' },
      { lat: 13.0827, lng: 80.2707, name: 'Chennai' }
    ],
    loadedWeight: 50000,
    currentWeight: 49950,
    expectedArrival: '2024-01-18 10:00',
    qrLockStatus: 'Sealed',
    sensorReading: 49950
  }
];

export const mockRiceMills = [
  {
    id: 'RM001',
    name: 'Trichy Modern Rice Mill',
    incomingShipments: 15,
    processed: 12,
    pending: 3,
    expectedOutput: 16500,
    actualOutput: 16450,
    yieldAccuracy: 99.7
  }
];

export const mockGodowns = [
  {
    id: 'GD001',
    name: 'TNCSC Central Godown - Chennai',
    currentStock: 250000,
    capacity: 500000,
    sensorsAvailable: 45,
    sensorsInUse: 12,
    sensorsReturned: 8
  }
];

export const mockFPS = [
  {
    id: 'FPS001',
    name: 'Fair Price Shop - Anna Nagar',
    stockReceived: 5000,
    stockDistributed: 3850,
    stockRemaining: 1150,
    nextDelivery: '2024-01-20',
    trustScore: 92,
    deliveryAccuracy: 95,
    beneficiaryFeedback: 90,
    disposalFrequency: 2
  },
  {
    id: 'FPS002',
    name: 'Fair Price Shop - T Nagar',
    stockReceived: 4500,
    stockDistributed: 4200,
    stockRemaining: 300,
    nextDelivery: '2024-01-19',
    trustScore: 88,
    deliveryAccuracy: 92,
    beneficiaryFeedback: 85,
    disposalFrequency: 1
  }
];

export const mockHouseholds = [
  {
    aadhaar: 'XXXX-XXXX-1234',
    name: 'Ramachandran K.',
    monthlyEntitlement: 35,
    receivedThisMonth: 35,
    lastCollection: '2024-01-10',
    status: 'Collected'
  }
];

export const mockDisposals = [
  {
    id: 'DP001',
    fpsId: 'FPS001',
    fpsName: 'Fair Price Shop - Anna Nagar',
    quantity: 150,
    reason: 'Damaged stock',
    date: '2024-01-12',
    status: 'Approved',
    channel: 'Cattle Feed',
    buyerRef: 'BF-***-789'
  }
];

export const mockGovernance = {
  districtRisk: [
    { district: 'Chennai', risk: 'Low', score: 92 },
    { district: 'Thanjavur', risk: 'Medium', score: 78 },
    { district: 'Trichy', risk: 'Low', score: 85 }
  ],
  fpsRisk: [
    { id: 'FPS003', name: 'FPS - Central', risk: 'High', score: 65 },
    { id: 'FPS004', name: 'FPS - North', risk: 'Medium', score: 75 },
    { id: 'FPS001', name: 'FPS - Anna Nagar', risk: 'Low', score: 92 }
  ],
  transporterRisk: [
    { id: 'TR001', name: 'ABC Transport', risk: 'Low', score: 88 },
    { id: 'TR002', name: 'XYZ Logistics', risk: 'Medium', score: 72 }
  ],
  monthlyLeakage: 0.15
};

export const mockNonCollection = [
  {
    householdId: 'HH001',
    name: 'Kamala R.',
    lastCall: '2024-01-15',
    reason: 'Illness',
    status: 'Resolved',
    escalation: false
  }
];

