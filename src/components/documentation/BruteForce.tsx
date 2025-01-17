import { useIndex } from '../../context';

function BruteForce() {
	const { ellipsis } = useIndex();

	return (
		<>
			<p>
				<span className='text-2xl font-bold uppercase'>Brute&nbsp;Force</span>.
				In{' '}
				<a href='https://www.coursera.org/course/crypto' target='_blank'>
					cryptography
				</a>
				, a brute&nbsp;force attack (also known as an exhaustive key search) is
				a hacking technique that can be used to access password-protected
				systems and resources. Such an attack consists of systematically
				checking all possible values until access is granted (or until the
				system is otherwise compromised).
			</p>
			<p>
				Naïve brute&nbsp;force attacks simply iterate through every possible
				character in the &ldquo;key space&rdquo; in a particular order (e.g., 0,
				1, 2 {ellipsis} a, b, c {ellipsis} X, Y, Z) and repeat this process
				until access is granted (or until the system is compromised).
			</p>
			<p>
				More acute brute&nbsp;force attacks—however—start by guessing common
				passwords (and common variations) before resorting to exhaustive
				searching. Done well, these attacks are significantly more efficient
				than naïve ones.
			</p>
			<p>
				Assuming a system doesn't have known collateral weaknesses, formal
				cryptanalytic definitions of security rely on the difficulty of brute
				force attacks.
			</p>
			<p>
				{' '}
				Generally, as the complexity of a passphrase increases, the amount of
				time needed to break it also increases—
				<b>exponentially</b>. This means that simple passwords are usually
				hacked more quickly than more complex passphrases.
			</p>
			<p>
				Brute&nbsp;force is—essentially—an exercise in applied statistics. Let's
				illustrate this with a few examples.
			</p>
			<p>
				Program X uses <i>only numbers</i> for its passwords. If a user selects
				a password for Program X that is only one character long, then there are
				ten possible passwords in this key space: 0, 1, 2, 3, 4, 5, 6, 7, 8, and
				9. Obviously, this could be brute-forced extremely quickly (even
				manually).
			</p>
			<p>
				If a user selects a password for Program X that has a length of{' '}
				<i>exactly</i> two characters, then there are 100 possible passwords:
				00, 01, 02, 03 {ellipsis} 10, 11, 12, 13 {ellipsis} 96, 97, 98, 99.
			</p>
			<p>
				If a user selects a password for Program X that has a <i>key space</i>{' '}
				of two characters (viz., the password could be one or two characters
				long), then there are 110 possible passwords: 0, 1, 2, 3 {ellipsis} 00,
				01, 02, 03 {ellipsis} 10, 11, 12, 13 {ellipsis} 96, 97, 98, 99.
			</p>
			<p>
				Program Y—on the other hand—allows <b>both</b> <i>numbers</i>{' '}
				<b className='uppercase'>and</b> <i>Standard English letters</i> for its
				passwords. If a user selects a password for Program Y that is only one
				character long, then there are 62 possible passwords within this key
				space: 0, 1, 2, 3 {ellipsis} a, b, c, d {ellipsis} W, X, Y, Z.
			</p>
			<p>
				Obviously, this would take longer to brute&nbsp;force than a
				one-character password for Program X, but it could still be brute-forced
				quite easily.
			</p>
			<p>
				This suggests that a password of length L for Program Y is{' '}
				<i>probably</i> more secure than a password of length L for Program X.
			</p>
			<p>
				Even if a password for Program Y uses <i>only numbers</i>, though, such
				a password is <i>probably</i> more secure for Program Y than it would be
				for Program X—<i>unless</i> a hacker knew that this password only used
				numbers (which would reduce the key space to search to that of Program
				X).
			</p>
			<p>
				In light of the foregoing, one can deduce that <b>length</b> and{' '}
				<b>complexity</b> are significant factors for determining cryptanalytic
				security.
			</p>
			<p>
				An additional factor for cryptanalytic security is <i>randomness</i>.
				For purposes of this documentation, I'll define <b>random</b> as
				&ldquo;made, done, happening, or chosen in a manner that has equal
				probability for each element of the set.&rdquo;
			</p>
			<p>
				Think about tossing a coin. There are two possible outcomes: heads or
				tails. Assuming that the coin and tosses are fair, it is{' '}
				<i>equally probable</i> that the outcome will be <b>heads</b> as it is{' '}
				<b>tails</b>. A coin toss is a simple way to get{' '}
				<i>truly&nbsp;random</i> results.
			</p>
			<p>
				Without belaboring the point too much, something that is{' '}
				<i>truly&nbsp;random</i> (e.g., a coin toss, a dice roll) is distinct
				from something that is <i>pseudorandom</i>. For purposes of this
				documentation, I'll define <b>pseudorandom</b> as &ldquo;made, done,
				happening, or chosen in a manner that satisfies one or more statistical
				tests for randomness.&rdquo;
			</p>
			<p>
				The difference between <b>truly&nbsp;random</b> and <b>pseudorandom</b>{' '}
				is <i>cryptographically significant</i>. Pseudorandom generators (PRGs)
				tend to exhibit biases, which can be exploited by hackers. Even though
				there are ways to augment the randomness of PRGs, such methods are
				incredibly complicated and <i>probably</i> still don't offer the
				protection of <i>truly&nbsp;random</i> methods. If you're concerned at
				all, please just stick with <b>RollPWD</b>, and don't be shy about using
				some of the extra precautions provided in this documentation.
			</p>
			<p>
				One method that can increase randomness is to use a <i>salt</i>. Defined
				simply, <b>salt</b> is a block of data that is appended to a passphrase.
				Salt provides protection against certain hacking methods, such as
				dictionary attacks.
			</p>
			<p>
				A dictionary attack involves building a list of possible passphrases
				along with pre-computed cryptographic information that lets an attacker
				check passphrases faster. Salt protects against this by requiring an
				additional, separate entry for each salt.
			</p>
			<p>
				If you use 30 bits of salt, an attacker would need a billion additional
				dictionary entries <i>for each</i> passphrase (or they'd need to run
				through their dictionary attack for each salt to test). Building such a
				dictionary is both expensive and onerous. A sensible hacker would{' '}
				<i>probably</i> refocus their nefarious efforts on an easier target.
				You're welcome.
			</p>
			<p>
				Uses of salt can get complicated quickly, but I'll limit this
				documentation to how salt can be used to strengthen a passphrase created
				with <b>RollPWD</b>. Assuming the program you're using accepts
				passphrases of <i>arbitrary length</i>, you can—and should—add your own
				salt to increase security.
			</p>
			<p>
				Pick the longest <b>RollPWD</b> passphrase you feel comfortable
				remembering (preferably <i>at least</i> <b>six</b> words) and then add
				something that is unique to you (e.g., a familiar telephone number, the
				name of someone in your life, or a goal you intend to achieve). So, a
				final passphrase might look like this.
			</p>
			<p className='text-center'>
				<b>hera steam slop aim join del 555-867-5309</b>
			</p>
			<p>
				Even this limited use of a salt can greatly increase your security.
				Assuming a hacker has sufficient resources to compile an electronic
				dictionary large enough to store the 7,776 entries in <b>RollPWD</b>'s
				index <i>six times</i>—which (assuming the hacker knew was exactly six{' '}
				<b>RollPWD</b> words) would require more than 221 sextillion entries (
				<code>
					2.21 x 10<sup>23</sup>
				</code>
				)—your passphrase would <i>still</i> be secure from such an attack.
			</p>
			<p>
				Just for fun, though, I'll show you the amount of resources required to
				create such a dictionary. But feel free to skip the next few paragraphs
				to &ldquo;To&nbsp;recapitulate,&rdquo; if you don't like fun.
			</p>
			<p>
				Generally, one text character takes one byte (i.e., 8 bits) to store.
				Considering that the <i>average length</i> of each of the words in{' '}
				<b>RollPWD</b>'s index is 4.2 characters (let's use an average of 5.0
				characters to factor in the spaces that should be used between words in
				a passphrase), it takes 38,880 bytes (approximately 39 kilobytes) to
				store <b>RollPWD</b>'s index if <i>only one word</i> is used.
			</p>
			<p>
				From this, one can extrapolate that it would take the <b>square</b> of
				38,880 bytes to store <b>RollPWD</b>'s index if <i>exactly&nbsp;two</i>{' '}
				<b>RollPWD</b> words are used (or this result, plus 38,880, if one or
				two words were used). This comes out to be 1,511,654,400 for a
				dictionary using exactly two words or 1,511,693,280 for a dictionary
				using two or fewer words. It would take approximately 1.5 gigabytes to
				store this dictionary. Obviously, such dictionaries get quite big, quite
				quickly, which means they also get <i>exponentially</i> more expensive
				too.
			</p>
			<p>
				Long story short, if someone uses a passphrase with a key space of{' '}
				<i>six</i> <b>RollPWD</b> words, it would take approximately 3,454
				yottabytes (
				<code>
					3.454 * 10<sup>27</sup>
				</code>{' '}
				[the largest unit of data defined as of the date of this documentation])
				to store a dictionary to break it. This is a level of security that
				could—<i>potentially</i>—be breakable by an organization with an
				extremely large budget, such as a large country's security agency. But (
				<i>probably</i>) that's about all that could hack it at this point
				(unless there are known <i>collateral weaknesses</i>).
			</p>
			<p>
				If such a passphrase uses a <i>salt</i> as discussed <i>supra</i> (which
				is not within the 7,776 entries in <b>RollPWD</b>'s index), then the
				dictionary would need to be expanded to account for this, and such an
				expansion would be significant. Such a system becomes even more secure
				if one uses a <i>salt</i> in conjunction with a{' '}
				<i>slow hash function</i>, but that is well beyond the scope of this
				documentation.
			</p>
			<p>
				<strong className='italic'>To&nbsp;recapitulate</strong>: <i>length</i>,{' '}
				<i>complexity</i>, and <i>randomness</i> are significant factors for
				determining cryptanalytic security. A good and common way to quantify
				the security of an electronic system is to use the concept of{' '}
				<i>entropy</i>.
			</p>
			<p>
				For purposes of this documentation, I'll define <b>entropy</b> as
				&ldquo;made, done, happening, or chosen in a manner that lacks order and
				predictability.&rdquo;
			</p>
			<p>
				The concept of <i>entropy</i> is difficult to grasp fully. But the
				method one uses to select a passphrase has entropy. Entropy tells how
				hard it would be to guess the passphrase itself <i>even if</i> an
				attacker knows the method used to select it. A passphrase is{' '}
				<b>more&nbsp;secure</b> if it's selected using a method that has{' '}
				<b>more&nbsp;entropy</b>.
			</p>
			<p>
				Entropy is measured in <i>bits</i>. The outcome of a single coin
				toss—i.e., heads or tails—has <i>one bit of entropy</i>. A simple way to
				calculate entropy is using{' '}
				<code>
					log<sub>2</sub>(N)
				</code>
				, where N is the number of elements in the key space. If one doesn't
				have access to a{' '}
				<a href='https://www.omnicalculator.com/math/log-2' target='_blank'>
					log-base 2 calculator
				</a>
				, this can be calculated using the following formula.
			</p>
			<p className='text-center'>
				<code>
					log<sub>2</sub>(N) = log(N) / log(2)
				</code>
			</p>
			<p>
				Justification for using a <i>truly&nbsp;random</i> method to generate a
				passphrase is that it has <i>high&nbsp;entropy</i>. It is high entropy
				that makes passphrases secure—especially from brute&nbsp;force attacks.
			</p>
			<p>
				For example, <b>RollPWD</b> will output a single word from five dice
				rolls. There are 7,776 (6<sup>5</sup>) possible outputs from this, and
				log<sub>2</sub>(7,776) = 12.9248 bits of entropy. A single{' '}
				<b>RollPWD</b> word is a <i>weak&nbsp;password</i>, which could be
				hacked without much effort or resources.
			</p>
			<p>
				&ldquo;So what? Why does all of this even matter? My system has never
				been hacked, and I don't foresee that happening either.&rdquo;
				Interesting objection, imaginary critic, but are you <i>sure</i> you've
				never been hacked?
			</p>
			<p>
				Not all hacks are known to the party being hacked. A great example is
				Poland's successful decryption of Germany's &ldquo;
				<a href='https://www.cia.gov/legacy/museum/artifact/enigma-machine/'>
					Enigma
				</a>
				&rdquo; Cipher in 1932. Germany had no idea that its cipher had been
				hacked and that the Allies were intercepting and decrypting its
				encrypted military intelligence.
			</p>
			<p>
				There are—of course—cryptographic methods (in addition to strong
				passphrases) to prevent and detect such breaches, but they are beyond
				the scope of this documentation.
			</p>
			<p>
				And the objection that one cannot foresee a hack happening to them is
				not a valid one. You should always be prepared and protect yourself
				against security vulnerabilities. Legal standards of care are starting
				to catch up with the reality and importance of electronic security, and
				failure to comply with such expectations could result in liability for
				negligence or malpractice.
			</p>
			<p>
				But the question of why this all matters remains. And it's a fair
				inquiry.
			</p>
			<p>
				Unless there are <i>known collateral security weaknesses</i>, hacking
				often occurs by <b>brute&nbsp;force</b>. Thus, you should take strong,
				affirmative steps to protect yourself, your technology, your data, and
				others from hacking.
			</p>
			<p>
				&ldquo;Alright, you've convinced me to use <b>RollPWD</b> to create
				better passphrases. How long should they be? Can I write them
				down?&rdquo; These are some good questions, (less skeptical) imaginary
				critic. Please allow me to answer them.
			</p>
			<p>
				I agree with{' '}
				<a
					href='https://theworld.com/~reinhold/dicewarefaq.html#howlong'
					target='_blank'
				>
					Diceware's FAQ Documentation
				</a>{' '}
				and recommend <b>six&nbsp;words</b> for most users (or five words with
				an extra symbol added at random).
			</p>
			<p>
				That said, I suggest using seven (or more) <b>RollPWD</b> words and
				adding a good salt—especially for systems that directly store money
				and/or payment information. Further, I recommend adding one word to
				these suggestions if you're seeking long-term data protection (i.e.,
				greater than 10 years). However, I also recommend{' '}
				<i>switching your passphrases</i> <b>regularly</b>.
			</p>
			<p className='text-center'>
				To establish a baseline perspective, here are some entropy
				approximations.
			</p>
			<ul>
				<li>
					<b>Five RollPWD words:</b> 64.6&nbsp;bits of entropy; such passphrases
					are breakable with a thousand or so PCs equipped with high-end
					graphics processors (criminal gangs with botnets of infected PCs can
					marshal such resources).
				</li>
				<li>
					<b>Six RollPWD words:</b> 77.5&nbsp;bits of entropy; such passphrases
					may be breakable by an organization with a very large budget (e.g., a
					large country's security agency).
				</li>
				<li>
					<b>Seven RollPWD words:</b> 90.4&nbsp;bits of entropy; such
					passphrases are—essentially—unbreakable with current technology, but
					this may change within the range of large organizations by around
					2030.
				</li>
				<li>
					<b>Eight RollPWD words:</b> 103&nbsp;bits of entropy; such passphrases
					should be secure through 2050.
				</li>
			</ul>
			<p>
				Also, inserting one random character—<i>at random</i>—adds about
				10&nbsp;bits of entropy. I strongly recommend doing this—regardless of
				passphrase length—since this is relatively easy to remember, and the
				benefits are significant.
			</p>
			<p>
				That said,{' '}
				<a
					href='http://world.std.com/~reinhold/dicewarefaq.html#howlong'
					target='_blank'
				>
					Diceware's FAQ Documentation
				</a>{' '}
				provides some good analogies for these levels of security, so I'll
				shamelessly lift from that.
			</p>
			<ul>
				<li>
					<b>Five ROLLPWD words:</b> You'd be content to keep paper copies of
					the documents you are protecting in an ordinary desk or filing cabinet
					in an unsecured office.
				</li>
				<li>
					<b>Six ROLLPWD words:</b> You want or need strong security, but you
					don't take any special precautions to protect your computer from
					unauthorized physical access, beyond locking the front door of your
					house and/or office.
				</li>
				<li>
					<b>Seven ROLLPWD words:</b> Your computer is protected from
					unauthorized access at all times when not in your personal possession
					by being locked in a room or cabinet in a building where access is
					controlled 24 hours a day (or is protected by a high quality alarm
					service). Routine cleaning and building maintenance personnel do not
					have physical access to your computer when you aren't present. You
					regularly use an up-to-date anti-virus program purchased off the floor
					at a computer store. You regularly verify digital
					signatures—especially with correspondence. You never run unverified
					software, e-mail attachments, or unsolicited disks of any kind
					whatsoever.
				</li>
				<li>
					<b>Eight ROLLPWD words:</b> You take all the steps listed under seven{' '}
					<b>RollPWD</b> words, in addition to the following: your computer is
					kept in a safe or vault at all times when it's not in sight of you or
					someone you trust completely; your computer was purchased off the
					floor at a randomly selected computer store; all the software used on
					your computer was distributed with a strong, independently verified
					electronic signature that you actually verified or was purchased off
					the floor in a randomly selected computer store; your computer has
					never been repaired or upgraded by anyone you do not trust completely;
					all disks and tapes used with your computer are kept in a safe and/or
					physically destroyed; you regularly take precautions against audio and
					video surveillance when entering passphrases (including keystroke
					loggers); you change your encryption keys regularly (at least
					annually); and you take precautions against{' '}
					<a
						href='https://www.sans.org/reading-room/whitepapers/privacy/introduction-tempest-981'
						target='_blank'
					>
						TEMPEST attacks
					</a>
					.
				</li>
			</ul>

			<p>
				Hopefully the foregoing discussion answers questions about how long of a
				passphrase you should use. I tend to prefer a security level between six
				and seven <b>RollPWD</b> words, with an extra random character (or so),
				and I try to use good salts too. I also prefer to change passphrases on
				a regular basis.
			</p>

			<p>
				That said, there's much debate about whether to write down passwords.
				Before I get too deep into differences of opinion, <i>please</i> do{' '}
				<b className='uppercase'>not</b> store passphrases on your electronic
				devices. It may be more convenient, but the <i>marginal convenience</i>{' '}
				is <b className='uppercase'>not</b> worth the security risks. If a
				hacker discovers that you store your passwords on your device, well, you
				can probably guess how you'll get hacked.
			</p>

			<p>
				With respect to writing down your passphrases, though, it's better if
				you can memorize them. If—however—you're more afraid of forgetting your
				passphrases than you are of having them stolen and/or subpoenaed, then
				you should probably pick very secure passphrases; write them down with a
				pen (on paper); and store them in a secure place (preferably locked).
			</p>
		</>
	);
}

export default BruteForce;
