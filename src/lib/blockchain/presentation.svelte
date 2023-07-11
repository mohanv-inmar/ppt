<script lang="ts">
	import Slide from './slide.svelte';
</script>

<Slide id="intro" animate>
	<section data-auto-animate>
		<p data-id="bd" class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">
			BlockChain
		</p>
	</section>

	<section data-auto-animate>
		<ul class="text-md">
			<li>What is Blockchain ?</li>
			<li>Different types of Blockchain</li>
			<li>Elements of Blockchain</li>
			<li>Genesis Block</li>
			<li>Blockchain Architecture</li>
			<ul class="text-4xl py-2">
				<li>What's inside a block</li>
			</ul>
			<li>Consensus</li>
			<ul class="text-4xl py-2">
				<li>Different consensus algorithms</li>
			</ul>
			<li>Bitcoin - (Based on Peer-to-peer paper)</li>
			<li>Ethereum</li>
		</ul>
	</section>
</Slide>

<Slide id="blockchain" animate>
	<section data-auto-animate>
		<p class="r-fit-text text-green-500 font-bold font-montserrat uppercase">
			What is Blockchain ?
		</p>
	</section>
	<section data-auto-animate class="text-left">
		<p class="text-md font-inter">
			Blockchain is a <span class="text-green-500">shared, immutable distributed ledger</span> that facilitates
			the process of recording transactions and tracking tangible or intangible assets in a business
			network.
		</p>
		<aside class="notes">
			Virtually anything of value can be tracked and traded on a blockchain network, reducing risk
			and cutting costs for all involved.
		</aside>
	</section>

	<section class="text-left" data-auto-animate>
		<p>Types of Blockchain:</p>
		<ul>
			<li>
				Public Blockchain <span class="fragment text-green-500 text-3xl">
					- Anyone can join and participate. these are decentralized and permissionless. these
					blockchains have scalability issues.</span
				>
			</li>

			<li>
				Private Blockchain <span class="fragment text-green-500 text-3xl">
					- restricted to limited group of participants. typically used inside an organization where
					the participant agrees to follow set of rules and conditions. have higher privacy and
					scalability.</span
				>
			</li>

			<li>
				Consortium Blockchain <span class="fragment text-green-500 text-3xl">
					- has elements of both public and private blockchains, usually controlled by a group of
					organizations. and consensus is managed by pre-selected nodes.</span
				>
			</li>
		</ul>
	</section>
</Slide>

<Slide id="elements" animate>
	<section class="text-left" data-auto-animate>
		<p data-id="bd" class="r-fit-text text-green-500 font-bold font-montserrat uppercase">
			Elements of Blockchain
		</p>
	</section>

	<section data-auto-animate class="text-left">
		<ul>
			<li>
				Nodes <span class="fragment text-green-500 text-2xl align-middle">
					- Individual computers, servers on the network</span
				>
			</li>
			<li>
				Blocks <span class="fragment text-green-500 text-2xl align-middle">
					- Blocks hold a set of transactions</span
				>
			</li>
			<li>
				Transactions <span class="fragment text-green-500 text-2xl align-middle">
					- actions or data exchanges recorded</span
				>
			</li>
			<li>
				Blockchain ledger <span class="fragment text-green-500 text-2xl align-middle">
					- immutable decentralized database
				</span>
			</li>
			<li>
				Cryptographic Hashing <span class="fragment text-green-500 text-2xl align-middle">
					- to ensure data integrity and security
				</span>
			</li>
			<li>
				Consensus <span class="fragment text-green-500 text-2xl align-middle">
					- protocols that enable nodes to agree on the state
				</span>
			</li>
			<li>
				Smart Contracts <span class="fragment text-green-500 text-2xl align-middle">
					- self executing contracts with predefined rules
				</span>
			</li>
		</ul>

		<aside class="notes">
			Blockchain uses cryptographic hash functions to ensure data integrity and security. Hash
			functions generate a unique fixed-size string (hash) from any input data, making it
			practically impossible to reverse-engineer the original data from the hash. Hashes are used to
			verify the integrity of blocks, transactions, and other data within the blockchain.

			<br />
			Consensus mechanisms are protocols or algorithms that enable nodes in the blockchain network to
			agree on the state of the blockchain. They determine how new blocks are added, how conflicts are
			resolved, and how consensus is reached among the network participants.
		</aside>
	</section>
</Slide>

<Slide id="genesis-block" animate>
	<section class="text-left" data-auto-animate>
		<p class="r-fit-text text-green-500 font-bold font-montserrat uppercase">Genesis Block</p>
	</section>
	<section class="text-left" data-auto-animate>
		<p>
			The genesis block is the <span class="text-green-500"
				>very first block created in a blockchain</span
			>
			network. It serves as the foundation or starting point of the blockchain's entire history. The
			genesis block has a unique position in the blockchain, as
			<span class="text-green-500">
				it doesn't reference a previous block since there is none before it.</span
			>
		</p>
		<p class="fragment">
			The genesis block has a specific identification, typically a predefined hash value or a unique
			set of data that distinguishes it from other blocks in the blockchain.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p>Used for:</p>
		<ul>
			<li>
				Concensus Initialization <span class="fragment text-green-500">
					- establishes the initial parameters and configuration of the blockchain.</span
				>
			</li>
			<li>
				Network Bootstrapping <span class="fragment text-green-500">
					- it acts as a starting point for new nodes that are joining the blockchainit acts as a
					starting point for new nodes that are joining the blockchain.</span
				>
			</li>
		</ul>

		<aside class="notes">
			Every subsequent block references the previous block's hash, forming a chain of blocks that
			can be traced back to the genesis block.
			<br />
			consensus Initialization: including the consensus algorithm, network rules, and other essential
			settings.
			<br />
			network bootstrapping: it retrieves the genesis block to synchronize its ledger and begin participating
			in the consensus process.
		</aside>
	</section>
</Slide>

<Slide id="blockchain-architecture" animate>
	<section data-auto-animate>
		<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">
			Blockchain Architecture
		</p>
	</section>
	<section data-auto-animate class="text-left">
		<p>Blockchain contains blocks, and each block contain information.</p>
		<p class="fragment">
			This information is needed to ensure integrity, security, and chronological order of the
			transactions recorded on the blockchain.
		</p>
		<aside class="notes">
			The block structure enables the formation of an immutable and tamper-proof chain of blocks,
			creating a transparent and trustless system.
		</aside>
	</section>

	<section data-auto-animate class="text-left">
		<p class="text-green-500">What's inside a block ?</p>
		<p>Each block holds:</p>
		<ul>
			<li class="fragment">Block Header</li>
			<li class="fragment">Transactions</li>
			<li class="fragment">Block Hash</li>
			<li class="fragment">Proof Of Work</li>
		</ul>

		<aside class="notes">
			- In blockchains using POW consensus, the block also holds the POW value
		</aside>
	</section>

	<section data-auto-animate class="text-left text-[1.8rem]">
		<p class="">Block Header</p>
		<p class="">This is the metadata section that provides important information about the block</p>
		<p class="fragment">It usually Includes:</p>
		<ul>
			<li class="fragment pb-2">Version</li>
			<li class="fragment pb-2">Timestamp</li>
			<li class="fragment pb-2">Previous Block Hash</li>
			<li class="fragment pb-2">Nonce</li>
			<li class="fragment pb-2">Merkle Root</li>
		</ul>

		<aside class="notes">
			- The version number of the blockchain protocol being used - Block creation timestamp - The
			hash value of the previous block in the blockchain, which creates the link between blocks. -
			This value is used in the mining process to find a valid hash - A hash of all the transactions
			in the block, ensuring the integrity of the transactions.
		</aside>
	</section>

	<section data-auto-animate class="text-left">
		<p>Transactions</p>
		<p>
			Every block contains a <span class="text-green-500">set of transactions</span>. Transactions
			represent <span class="text-green-500">various actions</span>, such as transferring digital
			assets or executing smart contracts.
		</p>
		<aside class="notes">
			Each transaction includes information about the sender, recipient, amount, and any additional
			data required for the transaction.
		</aside>
	</section>

	<section data-auto-animate class="text-left">
		<p>Block Hash</p>
		<p>
			The block hash is a unique identifier that represents the entire content of the block. It is
			generated by <span class="text-green-500"
				>applying a cryptographic hash function to the block header and transactions</span
			>.
		</p>
		<aside class="notes">
			The block hash ensures the integrity and security of the block, as any modification to the
			block would result in a completely different hash value.
		</aside>
	</section>

	<section data-auto-animate class="text-left">
		<p>Proof Of Work (POW)</p>
		<p>
			In blockchains that use PoW consensus, a block includes a proof of work value. This value is a
			<span class="text-green-500"
				>solution to a complex mathematical puzzle that miners must solve</span
			> to add the block to the blockchain.
		</p>
		<aside class="notes">
			The proof of work demonstrates that a certain amount of computational work has been done to
			validate the block.
		</aside>
	</section>
</Slide>

<Slide id="consensus" animate>
	<section data-auto-animate>
		<p data-id="bd" class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">
			Consensus
		</p>
	</section>

	<section data-auto-animate class="text-left">
		<p>
			<span class="text-green-500">Consensus</span> is a protocol by which the peers in a blockchain
			network reach a common agreement about the present state of the distributed ledger.
		</p>
		<p class="fragment">
			<span class="text-green-500">Consensus algorithms</span> define the rules by which nodes in a blockchain
			network agree on the state of the blockchain.
		</p>

		<aside class="notes">
			consensus algorithms achieve reliability in the Blockchain network and establish trust between
			unknown peers in a distributed computing environment. Essentially, the consensus protocol
			makes sure that every new block that is added to the Blockchain is the one and only version of
			the truth that is agreed upon by all the nodes in the Blockchain. The Blockchain consensus
			protocol consists of some specific objectives such as coming to an agreement, collaboration,
			cooperation, equal rights to every node, and mandatory participation of each node in the
			consensus process. Thus, a consensus algorithm aims at finding a common agreement that is a
			win for the entire network. Now, we will discuss various consensus algorithms and how they
			work.
		</aside>
	</section>
	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Consensus algorithms :</p>
		<ul>
			<li>Proof of work (PoW)</li>
			<li>Proof of stake (PoS)</li>
			<li>Delegated Proof of stake (DPoS)</li>
			<li>Proof of Burn (PoB)</li>
			<li>Proof of Elapsed Time (PoET)</li>
		</ul>
		<p>...and many more</p>
	</section>
	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Proof of Work :</p>
		<p>
			Proof-of-work is a consensus algorithm in which the transactions are validated by Miners.
			Miners try to solve a mathematical problem to validate the transactions, and once a set of
			transactions are validated, then a block is added to the blockchain network.
		</p>
	</section>

	<section data-auto-animate>
		<ul>
			<li>
				<span class="text-green-500">Bitcoin uses Pow.</span>
				<ul class="text-3xl">
					<li class="pb-2">
						The incentive for mining transactions lies in economic payoffs, where competing miners
						are rewarded with 6.25 bitcoins and a small transaction fee.
					</li>
					<li class="pb-2">
						This reward will get reduced by half its current value for every 4 years.
					</li>
				</ul>
			</li>
			<li class="fragment">
				<span class="text-green-500">Ethereum transitioned to PoS from PoW in Eth2.0</span>
			</li>
		</ul>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Proof of Stake :</p>
		<ul>
			<li>Validators invests in coins of the system by locking up some of the coins as stakes.</li>
			<li class="fragment">
				Validators will validate blocks by placing a bet on them if they discover a block that they
				think can be added to the chain.
			</li>
			<li class="fragment">
				Based on the actual blocks added in the Blockchain, all the validators get a reward
				proportionate to their bets, and their stake increase accordingly.
			</li>
		</ul>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Delegated Proof of Stake :</p>
		<ul>
			<li>Nodes delegate votes to other nodes.</li>
			<li class="fragment">
				then, whichever node then mines the block will distribute the reward to the nodes who
				delegated votes.
			</li>
		</ul>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Proof of Burn :</p>
		<ul>
			<li>
				Nodes burn their coins (<span class="text-green-500 italic"
					>coins sent to an address from where they are irretrievable</span
				>), and validators are chosen in random and then they earn right to mine.
			</li>
			<li class="fragment">
				The more coins they burn, the better their chances of being selected to mine the next block.
			</li>
		</ul>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Proof of Elapsed Time :</p>
		<ul>
			<li>
				Every validator on the network gets a fair chance to create their block. these nodes have to
				keep waiting for their turn, adding proof of their wait in the block.
			</li>
			<li class="fragment">
				This algorithm is said to be fair. It is widely used in permissioned blockchains.
			</li>
		</ul>
	</section>
</Slide>

<Slide id="peer-paper-bitcoin" animate>
	<section data-auto-animate>
		<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">
			Bitcoin Peer-to-peer Paper
		</p>
	</section>
	<section data-auto-animate class="text-left">
		<p class="">
			Nakamoto said that the bitcoin enables online payments to be sent directly from one party to
			another without intermediaries.
			<br />
			<span class="fragment"> he also discussed some concepts related to bitcoin:</span>
		</p>
		<ul class="text-green-300">
			<li class="fragment">Transaction Structure</li>
			<li class="fragment">Timestamp server and proof-of-work</li>
			<li class="fragment">Privacy considerations</li>
			<li class="fragment">Simplified payment verification (SPV)</li>
		</ul>
	</section>

	<section data-auto-animate class="text-left">
		<p class="text-green-500">Transaction Structure</p>
		<ul>
			<li>Bitcoin transactions consist of inputs and outputs.</li>
			<li class="fragment">
				<span class="text-green-500">Inputs</span> refer to unspent transaction outputs (UTXOs) from
				previous transactions that are being spent.
			</li>
			<li class="fragment">
				<span class="text-green-500">Outputs</span> represent the destination addresses where the bitcoins
				are being sent.
			</li>
		</ul>
	</section>

	<section data-auto-animate class="text-left">
		<p class="text-green-500">Timestamp Server and Proof-of-Work</p>
		<ul>
			<li>
				Transactions are timestamped using a timestamp server, which organizes them into a chain of
				blocks.
			</li>
			<li class="fragment">The chain is created using a proof-of-work mechanism.</li>
			<li class="fragment">
				Proof-of-work helps prevent double-spending and establishes the order of transactions.
			</li>
			<li class="fragment">
				Participants in the network are incentivized to follow this chain to maintain the security
				and integrity of the system.
			</li>
		</ul>
	</section>

	<section data-auto-animate class="text-left">
		<p class="text-green-500">Privacy Considerations</p>
		<ul>
			<li>
				Bitcoin addresses are pseudonymous, meaning they are not directly linked to individuals'
				identities.
			</li>
			<li class="fragment">
				However, the transaction graph can potentially reveal some information about users. Nakamoto
				suggests using new addresses for each transaction to enhance privacy.
			</li>
		</ul>
	</section>

	<section data-auto-animate class="text-left">
		<p class="text-green-500">Simplified Payment Verification (SPV)</p>
		<ul>
			<li>
				Nakamoto introduces the concept of SPV, allowing lightweight clients to verify transactions
				without storing the entire blockchain.
			</li>
			<li class="fragment">
				SPV clients only need to maintain block headers, reducing resource requirements.
			</li>

			<li class="fragment">
				Block header → Bloom filters → Merkle Proof → verification with merkle root
			</li>
		</ul>

		<aside class="notes">
			the svp clients contains block headers of all nodes, they use bloom filters to check whether
			the transaction of their interest is present or not. the svp client will make request to the
			network asking for the merkle proof of the transaction based on transaction details and bloom
			filter. svp client then apply necessary hashes to merkle proof and checks if it matching with
			the merkle root or not.
		</aside>
	</section>
</Slide>

<Slide id="intro" animate>
	<section data-auto-animate>
		<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">Ethereum</p>
	</section>

	<section data-auto-animate class="text-left">
		<p>
			Ethereum is an open-source blockchain platform that enables developers to build decentralized
			applications (dApps) and execute smart contracts.
		</p>

		<div class="fragment">
			<p>Features that set Ethereum apart from Others:</p>
			<ul>
				<li>Smart Contracts</li>
				<li>dApps</li>
				<li>Turing-Completeness</li>
				<li>Programmability</li>
			</ul>
		</div>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Smart Contracts</p>
		<p>
			Smart Contracts are self-executing agreements written in code. they define the rules and
			conditions for an agreement, and once deployed on the Ethereum blockchain, <span
				class="text-green-500"
				>they automatically execute actions when the specified conditions are met.</span
			>
		</p>
		<p class="fragment">
			This feature <span class="text-green-500">enables transparent interactions</span> between parties,
			removing the need for intermediaries in various applications.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Decentralized Applications</p>
		<p>
			Ethereum allows developers to build decentralized applications, or dApps, on its blockchain.
			These applications <span class="text-green-500"
				>leverage smart contracts to handle the back-end logic</span
			> and interact with the Ethereum network.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Turing Completeness</p>
		<p>
			The Ethereum Virtual Machine (EVM), which executes smart contracts, is Turing-complete. This
			means that <span class="text-green-500">any computation</span> that can be performed algorithmically
			can be executed on the Ethereum blockchain.
		</p>

		<aside class="notes">turing complete means that any computation can be performed.</aside>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Programmability</p>
		<p>
			Ethereum allows devs to write custom code and logic within smart contracts. Developers can
			create custom tokens, establish rules for financial transactions, automate processes, and much
			more, all within the Ethereum ecosystem.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Tokens</p>
		<p>
			Tokens are digital assets that are created and managed on the Ethereum blockchain. They can
			represent various types of assets, such as cryptocurrencies, utility tokens, or even ownership
			of physical assets.
		</p>
		<p class="fragment">
			<span class="text-green-500"
				>Tokens are built using smart contracts and adhere to specific token standards</span
			>, which are predefined sets of rules and functionalities.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Token Standards</p>
		<p class="">
			<span class="text-green-500">ERC-20</span>
			represents fungible tokens, fungible tokens are interchangable and has the same value, used for
			various purposes, including digital currencies, utility tokens, and representing shares in decentralized
			organizations. They have a common set of functions, such as transferring tokens, getting token
			balances, and approving token allowances.
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Token Standards</p>
		<p class="">
			<span class="text-green-500">ERC-721</span>
			represents NFTs (Non-Fungible tokens), each ERC-721 token is unique and can have distinct properties
			and attributes.
		</p>

		<p>
			NFTs are typically used to represent ownership of unique digital or physical assets, such as
			artwork, collectibles, virtual real estate, or in-game items
		</p>
	</section>

	<section class="text-left" data-auto-animate>
		<p class="text-green-500">Token Standards</p>
		<p class="">
			Other Standards in Ethereum that offer different functionalities and features. Some notable
			examples include <span class="text-green-500">ERC-1155</span>, which combines fungible and
			non-fungible token capabilities in a single contract, and
			<span class="text-green-500">ERC-777</span>, which introduces additional features for enhanced
			token transfers and interactions.
		</p>
	</section>
</Slide>

<Slide id="end-card" animate>
	<section>
		<p class="r-fit-text text-green-500 font-extrabold uppercase">The End</p>
	</section>
</Slide>
