import React from 'react';
import { SimpleTable } from '../lib/simple-table';

export default { title: 'Table' };

export const Body = () => <SimpleTable>Body Text</SimpleTable>;
export const Hero = () => <SimpleTable variant="Hero">Hero Text</SimpleTable>;
export const Heading = () => <SimpleTable variant="Heading">Heading Text</SimpleTable>;
