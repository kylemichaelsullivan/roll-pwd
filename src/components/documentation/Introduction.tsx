function Introduction() {
	return (
		<>
			<p>
				Weak passwords and passphrases are one of the most common flaws in
				electronic security. It saddens me to see how many professionals use
				passwords like <code>password</code> or <code>Sullivan1960</code> and
				use it for everything! You're better than that, aren't you?
			</p>
			<p>
				Electronic security is inherently multi-faceted. To achieve sufficient
				electronic security requires an understanding of the complex
				relationships between these aspects, consistent quality maintenance, and{' '}
				<a
					href='http://world.std.com/~reinhold/dicewarefaq.html'
					target='_blank'
				>
					strong passphrases
				</a>
				.
			</p>
			<p>
				Even with{' '}
				<a
					href='http://csrc.nist.gov/publications/fips/fips197/fips-197.pdf'
					target='_blank'
				>
					super fancy encryption protocols
				</a>{' '}
				(designed to prevent unauthorized access to and manipulation of your
				data), your system will suffer a fate like the{' '}
				<a href='https://www.youtube.com/watch?v=isJZt2r_jzg' target='_blank'>
					Death Star
				</a>{' '}
				unless you also use strong and unique passphrases.
			</p>
			<p>
				Hackers look for vulnerable targets and exploit the easiest ingress. And
				they don't play fairly!
			</p>
			<p>
				Exploration of more sophisticated hacking techniques is beyond the scope
				of this documentation (e.g.,{' '}
				<a
					href='https://www.cs.hmc.edu/~mike/public_html/courses/security/s06/projects/dan.pdf'
					target='_blank'
				>
					timing attacks
				</a>
				,{' '}
				<a
					href='https://www.rambus.com/understanding-differential-power-analysis/'
					target='_blank'
				>
					power usage attacks
				</a>
				,{' '}
				<a
					href='http://csrc.nist.gov/groups/STM/cmvp/documents/fips140-3/physec/papers/physecpaper19.pdf'
					target='_blank'
				>
					implementation attacks
				</a>
				,{' '}
				<a
					href='http://www.maths.qmul.ac.uk/~pjc/notes/crypt.pdf'
					target='_blank'
				>
					frequency analysis
				</a>
				,{' '}
				<a href='http://crypto.junod.info/lincrypt.pdf' target='_blank'>
					linear cryptanalysis
				</a>{' '}
				and{' '}
				<a
					href='https://www.engr.mun.ca/~howard/PAPERS/ldc_tutorial.pdf'
					target='_blank'
				>
					differential cryptanalysis
				</a>
				). But—because of their ubiquity—two topics are worth discussing here:{' '}
				<i>brute&nbsp;force</i> and <i>social engineering</i>.
			</p>
		</>
	);
}

export default Introduction;
