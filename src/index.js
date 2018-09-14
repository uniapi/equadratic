/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 14, 2018
*************************************************************************/

function equadratic(equation) {
  // the second degree equation pattern
  const regex = /([-+]?\s*\d*\s*\*?\s*[xX])\s*\^\s*2\s*([-+]\s*\d*\s*\*?\s*[xX])\s*([-+]\s*\d+)?\s*/;

  const args = { a: 0, b: 0, c: 0 };    // arguments for {a}, {b} and {c}
  const qrs = [];                       // quadratic roots
  const match = regex.exec(equation);   // getting matches from the equation
  let D;                                // Discriminant
  let sqrt;                             // Discriminant square root

  // getting rid of extra spaces, {x} and multiplication mark if such exists
  args.a = match[1].replace(/\s*/g, '').replace(/[Xx]/g, '').replace(/\*?/g, '');
  args.b = match[2].replace(/\s*/g, '').replace(/[Xx]/g, '').replace(/\*?/g, '');

  // converting to a number type but before checking whether the sign presented
  args.a = args.a.length > 0 && !isNaN(args.a) ? args.a * 1 : (args.a+1) * 1;
  args.b = args.b.length > 0 && !isNaN(args.b) ? args.b * 1 : (args.b+1) * 1;

  // checking if the third coefficient presented and then extracting it and converting
  args.c = match[3] ? match[3].replace(/\s*/g, '') * 1 : 0;

  // getting the discriminant and its square root
  D = Math.pow(args.b, 2) - 4*args.a * args.c;
  sqrt = Math.round(Math.sqrt(D));

  // if the discriminant is greater than zero then two roots exist
  if (D > 0) {
    qrs[0] = Math.round((-args.b + sqrt) / (2*args.a));
    qrs[1] = Math.round((-args.b - sqrt) / (2*args.a));
  }
  else if (D === 0)                   // if the discriminant is zero than two roots are equal
    qrs[0] = qrs[1] = Math.round(-args.b / (2*args.a));
  else                                // if the discriminant is less then zero then there are no roots
    qrs[0] = qrs[1] = null;

  if (qrs[0] > qrs[1])                // checking which is greater to swap by ascending
    [ qrs[0], qrs[1] ] = [ qrs[1], qrs[0] ];

  return qrs
}

export { equadratic };
