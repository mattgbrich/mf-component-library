import React, { useState } from 'react';

function Dead (props) {
  const [data, setData] = useState([]);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <h1>USELESS GRID</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MainDeadCode = props => <Dead {...props} />;

export default Dead;