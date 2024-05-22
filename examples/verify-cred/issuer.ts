import { AskarModule } from "@credo-ts/askar";
import { BbsModule } from "@credo-ts/bbs-signatures";
import {
	Agent,
	AutoAcceptCredential,
	AutoAcceptProof,
	ConnectionsModule,
	ConsoleLogger,
	CredentialsModule,
	DifPresentationExchangeProofFormatService,
	HttpOutboundTransport,
	JsonLdCredentialFormatService,
	LogLevel,
	ProofsModule,
	V2CredentialProtocol,
	V2ProofProtocol,
} from "@credo-ts/core";
import { HttpInboundTransport, agentDependencies } from "@credo-ts/node";
import { ariesAskar } from "@hyperledger/aries-askar-nodejs";
import {
	AnonCredsModule,
	LegacyIndyCredentialFormatService,
	LegacyIndyProofFormatService,
	V1ProofProtocol,
} from "@credo-ts/anoncreds";
import { anoncreds } from "@hyperledger/anoncreds-nodejs";
import { IndyVdrAnonCredsRegistry, IndyVdrModule } from "@credo-ts/indy-vdr";
import { indyVdr } from "@hyperledger/indy-vdr-nodejs";

export const issuer = new Agent({
	config: {
		label: "Issuer Agent",
		walletConfig: {
			id: "verify-agent-id",
			key: "issuer-agent-key",
		},
		endpoints: ["http://192.168.1.27:6006/didcomm"],
		logger: new ConsoleLogger(LogLevel.trace),
	},
	modules: {
		// BBS Module
		bbs: new BbsModule(),

		anoncreds: new AnonCredsModule({
			anoncreds,
			registries: [new IndyVdrAnonCredsRegistry()],
		}),

		indyvdr: new IndyVdrModule({
			indyVdr,
			networks: [
				{
					genesisTransactions:
						'{"reqSignature":{},"txn":{"data":{"data":{"alias":"opsnode-dn","blskey":"3brafcinN6X2wXvkgLdTUiVNCaJr1EhdM2bZFcmufx3ywS9XebbpwPpT7dMza9UzL5yk4HavjFuWHSBuyT5MsuLb6MYLwyzVXGiokZeubpRwuLfghVEchVALczFsJyKo7w5NZtamYP4Lx2SAYofaqHqQj3RibuPSv3err6rt9JFx6x3","blskey_pop":"RXMfLofDgBaZP3Nj8jY7fKM23atzcvne566MPmVqnnCLcocxvPRTV44S9fxS63URHZatM6UVTT9e3a5z2CnAL9mpdWB26YwQAHY3qQckJRU9fZuUk2TuTpcqD7Ga3ev75rrfsLqHiK2H2g6bA8sdB8X5NtQrqx3uZVrwwbwHg49WTy","client_ip":"13.244.162.184","client_port":"9702","node_ip":"13.244.218.51","node_port":"9701","services":["VALIDATOR"]},"dest":"A1XETkQtZmHhWiEcbdcJEwww49dmC7x47q9JgvzMksKV"},"metadata":{"from":"LCWN4ivQ3b68GaoMAuKyDq"},"type":"0"},"txnMetadata":{"seqNo":1,"txnId":"cae6afe3265457b7222617237aef8c0bf6e2900968d0922fc48e18473a221f88"},"ver":"1"}\r\n{"reqSignature":{},"txn":{"data":{"data":{"alias":"IdRamp-Demo1","blskey":"PUyFcZsKvVFy9qE4PHZReRDTMLQ9yRLuGvkUrN8fv24BYyFYcaHm66xgjaSk67tuv9ZyPvigHvFNocLSfxyeLtcjSr2oYjy99C3QXSpp8ZxGPTeWgbkNWxwLgZcXEYHdy6cjyg48N9AQFa4fx6zKnndMfKDxavGtZ1Pcciyesrvy1s","blskey_pop":"RL3oCrshuc8uiQ61VHPKfU7Pvkf9myjAcBNyGWHbG9Ws5PwXBwL7hNmhUR795zZNY2N275J1nP8iA8GJTaYR8M5onvH7CYKK5Pwom1iNuSV9Crxwg3pxTQVD3vNeEPAy9ZWEmZctS2w8dqQQ1aZp6hEU936dAz1XxxFb3j74oYj6Ky","client_ip":"207.126.128.11","client_port":"9702","node_ip":"207.126.129.11","node_port":"9701","services":["VALIDATOR"]},"dest":"DNfGpxhAvpwBVGEnFLJxC3GVHzXPVjQDtxsmT6PezsRy"},"metadata":{"from":"UgWhCVmxmsMm5XbafkSDzw"},"type":"0"},"txnMetadata":{"seqNo":2,"txnId":"15182d52b3b8fb130b2ab04aa982059b6d6543989b755a1e0eae02304ae51d53"},"ver":"1"}\r\n{"reqSignature":{},"txn":{"data":{"data":{"alias":"IdRamp-Demo2","blskey":"13fwtVCpuLDLJp5EyoT9mQK9x3f3uykhRFG1SbRWrHMpXz2mptsqi8agDKviWMnCywcAGuwsZyCg8PdZUtKeByPtj78HtHf1Rnaa84DpDQ7CGnfuNwi881TqbScQyYpHw1ZsqqQmh7CXx6h8UeNWnVqpvViDx2DRi8hKScisFkkBH6o","blskey_pop":"R5QRJhHZijB7i1ESNZgGnU8cmdhNGhZHMGkie7cf6opW7DqAhuWWzEc4dRB1tKoEwDAXy9Akwc5KGXE4FLRzpj6WAzKEjyuat2vntzQGFusdSCrrjr4Kut1LF5YRr8xEQGwRw3iXguhhw4ehn6bBwc4hPG2MhqYrHyzfe3KhoReYjR","client_ip":"207.126.128.14","client_port":"9702","node_ip":"207.126.129.14","node_port":"9701","services":["VALIDATOR"]},"dest":"61CT5xXftBfYQqCjuBwCcd1rzsdkYh4AbEmkkG6LK1xB"},"metadata":{"from":"BZQJHtWR9uTpUGpHXC5AQc"},"type":"0"},"txnMetadata":{"seqNo":3,"txnId":"7a900ed1b24945a6be2afe76a82cb6645e4d48b922627b6db40dda387c53c972"},"ver":"1"}\r\n{"reqSignature":{},"txn":{"data":{"data":{"alias":"IdRamp-Demo3","blskey":"KvZ49NgBiKjiHNPckG5n1NqPZQYrSztpxghWnVkbsAndeZ9U5Zq5aaLFcJDi7wN9A6DM7cwJQVmYWdVuNG8Ci8kzo95P1WhM9x4ye2s6eh3Uoiq1vpRGoSt3LX1HecqENK8gTQCqpGiZpz74b5tg4RLuRm65TPcKLM7gpGcfFRHZCr","blskey_pop":"QsphXcJaPrTWUPtFMnd4CLqMPpuU9b5fXXSUBsbiFnL5fidPD9B8rFnukD4wDSteeBGFTxM7Xi1agSLpah19nWevh8Mn9mHEb1KATEG5xaVWdrHxEJHHGXavxEoVkdDjWYx97bDyPuccEc5K8zaE9qt5VPe9K7CNqqHdikvhPZxxQw","client_ip":"207.126.128.16","client_port":"9702","node_ip":"207.126.129.16","node_port":"9701","services":["VALIDATOR"]},"dest":"CAHd9Wt1NaaM7uWu4L2ZoXw6Gy7WDyqFLnNmRDZLW9cT"},"metadata":{"from":"TnbCiyvJwbri1qBoC9DPYd"},"type":"0"},"txnMetadata":{"seqNo":4,"txnId":"e79eae9b08847569f6584e439598b69a983c068995ddfd2d1c032d8f6cb5ffe6"},"ver":"1"}',
					isProduction: false,
					indyNamespace: "indicio:demo",
					connectOnStartup: true,
				},
			],
		}),

		// Storage Module
		askar: new AskarModule({
			ariesAskar,
		}),

		// Connections module is enabled by default, but we can
		// override the default configuration
		connections: new ConnectionsModule({
			autoAcceptConnections: true,
		}),

		// Credentials module is enabled by default, but we can
		// override the default configuration
		credentials: new CredentialsModule({
			autoAcceptCredentials: AutoAcceptCredential.Always,

			// Only v2 supports jsonld
			credentialProtocols: [
				new V2CredentialProtocol({
					credentialFormats: [new JsonLdCredentialFormatService()],
				}),
			],
		}),

		proofs: new ProofsModule({
			autoAcceptProofs: AutoAcceptProof.Always,

			proofProtocols: [
				new V1ProofProtocol({
					indyProofFormat: new LegacyIndyProofFormatService(),
				}),

				new V2ProofProtocol({
					proofFormats: [new DifPresentationExchangeProofFormatService()],
				}),
			],
		}),
	},
	dependencies: agentDependencies,
});

issuer.registerInboundTransport(
	new HttpInboundTransport({
		port: 6006,
		path: "/didcomm",
	}),
);
issuer.registerOutboundTransport(new HttpOutboundTransport());
