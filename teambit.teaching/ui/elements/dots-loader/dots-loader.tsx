import React from 'react';
import classNames from 'classnames';

const styles = require('./dots-loader.module.scss');

export type LoaderProps = React.HTMLAttributes<HTMLSpanElement>;

export const DotsLoader = ({ className, ...rest }: LoaderProps) => {
	return (
		<span {...rest} className={classNames(className, styles.dotsLoader)}>
			<span>●</span>
			<span>●</span>
			<span>●</span>
		</span>
	);
}