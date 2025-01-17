import BinaryTable from './BinaryTable';

function Overview() {
	return (
		<>
			<p>
				<span className='text-2xl font-bold uppercase'>
					Logistical Overview.
				</span>
			</p>
			<p>
				<span className='text-xl font-bold uppercase'>Dice.</span>
			</p>
			<p>
				<b>RollPWD</b> is based on a method for creating passwords and
				passphrases called Diceware™. Diceware uses dice to randomly select
				words from an index of 7,776 short words, abbreviations, and
				easy-to-remember character strings.
			</p>
			<p>
				If you have dice available, it's faster and simpler to use them instead
				of coin tosses (i.e., five dice rolls vs. 13 coin tosses [per{' '}
				<b>RollPWD</b> word]). But I developed the coin variant of{' '}
				<b>RollPWD</b> because I didn't have dice at my office at the time and
				could only find a coin. I now have{' '}
				<a
					href='http://www.amazon.com/Trademark-Poker-Grade-Serialized-Casino/dp/B00157YFJE/ref=sr_1_1'
					target='_blank'
				>
					casino-grade dice
				</a>{' '}
				at my office. They're magnificent!
			</p>
			<p>
				&ldquo;But who decided to use an index of 7,776? That seems
				arbitrary.&rdquo; Astute observation, imaginary critic, but 7,776 = 6
				<sup>5</sup>—which is the number of possibilities of rolling a fair,
				six-sided dice five times.
			</p>
			<p>
				For example, let's say you roll such a dice five times and get{' '}
				<code>1,6,6,6,5.</code> Using our{' '}
				<a href='http://world.std.com/~reinhold/diceware.wordlist.asc'>
					Word List
				</a>
				, you'll find that <code>16665</code> corresponds to <i>cleft</i>.
			</p>
			<p>
				Let's say you roll this dice five more times and get{' '}
				<code>5,6,3,2,2</code>. Using our{' '}
				<a href='http://world.std.com/~reinhold/diceware.wordlist.asc'>
					Word List
				</a>
				, you'll find that <code>56322</code> corresponds to <i>synod</i>.
			</p>
			<p>
				And let's say you roll this dice five more times and get{' '}
				<code>2,1,1,3,1</code>. Using our{' '}
				<a href='http://world.std.com/~reinhold/diceware.wordlist.asc'>
					Word List
				</a>
				, you'll find that <code>21131</code> corresponds to <i>clock</i>.
			</p>
			<p>
				&ldquo;What's so special about a <i>cleft synod clock</i>?&rdquo;
				Interesting question, imaginary critic, but such a passphrase is
				probably more secure than natural language because it has much higher
				entropy.
			</p>
			<p>
				<i>Cleft synod clock</i> is too short to be a sufficiently strong
				passphrase on its own (and I'd strongly implore you to not use a
				passphrase directly from this documentation), but this still has
				38.7&nbsp;bits of entropy. Randomly added random characters each add
				approximately 10&nbsp;bits of entropy.
			</p>
			<p>
				The importance of strong passphrases is explained in much more depth in
				the section of this documentation about{' '}
				<b className='uppercase'>brute&nbsp;force</b>. If you're not yet
				convinced by the value of <b>RollPWD</b>, I challenge you to read that
				section and try to argue against definite statistics.
			</p>
			<p>
				<span className='text-xl font-bold uppercase'>Coin.</span> (
				<i>deprecated</i>)
			</p>
			<p>
				Hopefully, you've read and understood the section of this documentation
				about using Dice with <b>RollPWD</b>, as that establishes much of the
				foundation of its coin variant.
			</p>
			<p>
				If you have dice available, it's faster and simpler to use them instead
				of coin tosses (i.e., five dice rolls vs. 13 coin tosses [per{' '}
				<b>RollPWD</b> word]). But I developed the coin variant because I didn't
				have dice at my office and could only find a coin.
			</p>
			<p>
				Additionally, if you are concerned about any potential statistical bias
				and/or are obsessed with maximizing randomness and/or entropy in picking
				passphrases, then you should stick with using Dice with <b>RollPWD</b>.
				You should also consider adding a salt, adding an extra <b>RollPWD</b>{' '}
				word, randomly adding random characters, and taking additional
				precautions.
			</p>
			<p>
				In developing the coin variant of <b>RollPWD</b>, I had to balance
				several competing factors. Ultimately, I decided to minimize the number
				of coin tosses, while maintaining the security strength of{' '}
				<b>RollPWD</b>'s Dice variant as much as I could.
			</p>
			<p>
				Since each coin toss has two possible results (heads or tails), each
				toss has <i>one bit of entropy</i>. From this, the nerdy programmer in
				me was quickly drawn toward binary.
			</p>
			<p>
				The first step I took was to flip a coin. By this, I determined Heads
				would be 0 and that Tails would be 1. I decided to lump tosses into
				groups of three and mapped such trios to the possible values of a single
				dice roll.
			</p>
			<p>
				The next issue was how to map the eight possible results of three coin
				tosses (2<sup>3</sup>) (i.e., HHH, HHT, HTH, HTT, THH, THT, TTH, TTT )
				to the six values of dice rolls. To my chagrin, however, I couldn't
				think of any way to do this without statistical bias or having to
				disregard the results of certain tosses.
			</p>
			<p>
				Consequently, I initially decided that I would disregard the values of 0
				(HHH) and 7 (TTT) and would map the remaining results according to their
				binary values, as I'd determined: 1 (HHT); 2 (HTH); 3 (HTT); 4 (THH); 5
				(THT); 6 (TTH).
			</p>
			<p>
				This meant I could emulate each <i>RollPWD</i> word from Dice Rolls with
				15 coin tosses (optimally); 21 coin tosses (probably); but up to
				infinite tosses (theoretically). While this method tended to add a touch
				of <i>gambling flair</i>, it quickly came to feel unjustifiably
				inefficient.
			</p>
			<p>
				So, I went back to the drawing board (both figuratively and literally)
				and reconsidered the underlying binary. Then it hit me!
			</p>
			<p>
				Rather than mapping trios of coin tosses, I decided I'd just build
				binary numbers <i>directly</i> from the coin tosses.
			</p>
			<p>
				For the arithmetically inclined, binary is a base-two polynomial that
				starts from the rightmost digit (viz., the &ldquo;least significant
				bit&rdquo;) with a value of either <code>0</code> or <code>1</code>.
			</p>
			<p>
				If the <i>least significant bit</i> is a 0, the corresponding decimal
				value is <i>even</i>—i.e., the value of B for (B)2<sup>X</sup> when X =
				0 is 0(2)<sup>0</sup> = 0. If, instead, the least significant bit is a
				1, the corresponding decimal value is <i>odd</i>—i.e., the value of B
				for (B)2<sup>X</sup> when X = 0 is 1(2)<sup>0</sup> = 1.
			</p>
			<BinaryTable selected={0} />
			<p>
				The second rightmost digit (i.e., the digit to the immediate left of the{' '}
				<i>least significant bit</i>) will also have a value of either 0 or 1.
				The value this bit represents is (B)2<sup>1</sup>. So, if B = 0 (when X
				= 1), then zero is added to the emerging polynomial. If, instead, B = 1
				(when X = 1), then two is added to the emerging polynomial because (1)2
				<sup>1</sup> = 2.
			</p>
			<BinaryTable selected={1} />
			<p>
				The third rightmost digit (i.e., the digit two places left of the{' '}
				<i>least significant bit</i>) will also have a value of either 0 or 1.
				The value this bit represents is (B)2<sup>2</sup>. So, if B = 0 (when X
				= 2), then a zero is added to the emerging polynomial. If—instead—B = 1
				(when X = 2), then four is added to the emerging polynomial because (1)2
				<sup>2</sup> = 4. And this pattern continues—with X increasing by one
				for each bit to the left of the <i>least significant bit</i>—until the
				bit that is furthest left is reached (i.e., the &ldquo;
				<i>most significant bit</i>&rdquo;).
			</p>
			<BinaryTable selected={2} />
			<p>
				Don't feel bad if binary feels unnatural and confusing. It is{' '}
				<i>exactly</i> that to humans, and I didn't quite understand it until I
				read Phil Smith's{' '}
				<a
					href='http://www.amazon.com/Hexadecimal-Calculations-Computer-Systems-Minutes-ebook/dp/B00QVT80II'
					target='_blank'
				>
					Binary and Hexadecimal Calculations
				</a>
				.
			</p>
			<p>
				Computers—on the other hand—operate based <i>entirely</i> on a series of
				electrical currents (where 1 represents the presence of a signal or
				&ldquo;on&rdquo; and 0 represents the absence of a signal or
				&ldquo;off&rdquo;).
			</p>
			<p>
				But I'll stop myself before this becomes a dissertation on fundamentals
				of Computer Science. If you want to experiment with binary, though, I'd
				suggest a good{' '}
				<a
					href='https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html'
					target='_blank'
				>
					binary/decimal conversion calculator
				</a>{' '}
				and/or buying me a drink to discuss it further.
			</p>
			<p>
				But enough about theory for the moment. Most recently, I decided to{' '}
				<i>optimize the efficiency</i> of <b>RollPWD</b>'s coin variant and
				reduce the number of tosses for each <b>RollPWD</b> word to 13. Here's
				how I accomplished this.
			</p>
			<p>
				I realized that the <i>most significant bit</i> in binary (i.e., the
				leftmost one-bit in 7,776 [i.e., the number of entries in the{' '}
				<b>RollPWD</b> index]) has the <i>decimal equivalent</i> of 4,096 (i.e.,{' '}
				2<sup>12</sup>).
			</p>
			<p>
				Thus, I could get <i>every</i> value in <b>RollPWD</b>'s index with
				12-13 tosses (with an estimated <i>average entropy</i> of 12.5 bits per{' '}
				<b>RollPWD</b> word) by building binary numbers from the{' '}
				<i>least significant bit</i> to the <i>most significant bit</i> (i.e.,
				from right to left) and deriving their respective decimal equivalents.
			</p>
			<p>
				Next, I assigned each of the 7,776 entries in <b>RollPWD</b>'s index a
				decimal value from 0 to 7,775, based on each entry's respective
				position/order in <b>RollPWD</b>'s index. From here, I decided to use
				these decimal values as lookup keys in an array of <b>RollPWD</b> words.
			</p>
			<p>
				Specifically, if someone tossed a coin 13 times and got 13 heads in a
				row, the decimal equivalent would be 0, which corresponds to a{' '}
				<b>RollPWD</b> result of <code>1,1,1,1,1</code>, which has
				&ldquo;a&rdquo; as the <b>RollPWD</b> word.
			</p>
			<p>
				If someone tossed a coin 13 times and got 12 heads before getting tails
				once, the decimal equivalent would be 4,096, which corresponds to a{' '}
				<b>RollPWD</b> result of <code>4,1,6,5,5</code>, which has
				&ldquo;mayor&rdquo; as the <b>RollPWD</b> word.
			</p>
			<p>
				If—instead—someone tossed a coin 13 times and got tails once and then
				got 12 heads in a row, the decimal equivalent would be 1, which
				corresponds to the <b>RollPWD</b> result of 1 1 1 1 2, which has
				&ldquo;a&p&rdquo; as the <b>RollPWD</b> word.
			</p>
			<p>
				But enough with the straightforward cases. What happens if someone
				tosses a coin 13 times and gets all tails? The decimal equivalent of
				this binary number is 8,191, but this isn't within <b>RollPWD</b>'s{' '}
				decimal index.
			</p>
			<p>
				To alleviate this issue, I devised a relatively simple solution for this
				that barely wastes coin flips, and still provides a high amount of
				entropy per <b>RollPWD</b> word. Basically, if the decimal equivalent of
				this binary number is &gt; 7,775 (i.e., the highest decimal entry in{' '}
				<b>RollPWD</b>'s index), <b>RollPWD</b> just ignores the last coin toss
				(i.e., the <i>most significant bit</i>) by subtracting 4,096 (2
				<sup>12</sup>) from the final decimal equivalent of the binary number.
			</p>
			<p>
				As already stated, if you're really concerned about{' '}
				<i>optimizing entropy</i> and{' '}
				<i>minimizing any potential statistical bias</i>, then you should use
				dice with <b>RollPWD</b> (and I'd strongly recommend{' '}
				<a
					href='http://www.amazon.com/Trademark-Poker-Grade-Serialized-Casino/dp/B00157YFJE/ref=sr_1_1'
					target='_blank'
				>
					casino-grade dice
				</a>{' '}
				if you're obsessed with these concerns), in addition to the other
				strategies provided in this documentation.
			</p>
			<p>
				But—if you're like me—you'll quickly realize that you can more than make
				up for any ostensible diminution in entropy and/or marginal statistical
				bias by using an extra <b>RollPWD</b> word (or two) and by using a good
				salt.
			</p>
			<p>
				After all, doesn't a passphrase like{' '}
				<code>hera steam slop aim join del 6165316062</code> feel significantly
				better than <code>password</code>? So, if you don't have dice available,
				coin tosses are a nice alternative. But do{' '}
				<b className='uppercase'>not</b> use electronic simulators to generate
				your results!
			</p>
		</>
	);
}

export default Overview;
