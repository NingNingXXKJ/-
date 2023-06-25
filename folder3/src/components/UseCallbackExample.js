import React, { useState, useCallback, useEffect } from 'react';


const ExpensiveComponent = React.memo(({ onItemClick, itemId }) => {